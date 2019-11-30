import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { mapGroupNameFromKey } from '../../utils/mapGroupName';
import { mappedSubgroupName } from '../../utils/constants';
import AlphabetIndex from '../AlphabetIndex/AlphabetIndex';
import ItemsContainer from '../items/ItemsContainer/ItemsContainer';
import useStyles from './SubgroupContainer.styles';

export default function SubgroupContainer({ data }) {
  const classes = useStyles();
  const { type, subtype } = useParams();
  const [currentChar, setCurrentChar] = useState(null);
  const subgroupsRef = useRef(null);
  const alphabetRef = useRef(null);
  const groupName = mapGroupNameFromKey(type);
  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;
  const subgroupData = groupData ?
    groupData.find(group => mappedSubgroupName[subtype] === group.subgroup_name).subgroup_data : null;
  const alphabet = [];

  function scrollToChar(char) {
    document.getElementById(char).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function onScroll(event) {
    const scrollTop = event.target.scrollTop + alphabetRef.current.offsetHeight + 50;
    const item = [...event.target.children]
      .find(child => {
        const firstChild = document.getElementById(child.id);
        const secondChild = document.getElementById(alphabet[alphabet.indexOf(child.id) + 1]);
        const secondChildBounding = secondChild ?
          secondChild.offsetTop - 21 : event.target.scrollHeight;
        return scrollTop > firstChild.offsetTop - 70 && scrollTop < secondChildBounding
      });

    if (item && item.id !== currentChar) {
      setCurrentChar(item.id)
    }
  }

  const subgroups = !subgroupData ?
    [] :
    Object.values(
      subgroupData
        .sort((a, b) => {
          if (a < b) return -1;
          else if (a > b) return 1;
          return 0;
        })
        .map(item => {
          if (!alphabet.find(char => char === item.name.charAt(0))) {
            alphabet.push(item.name.charAt(0))
          }
          return {
            name: item.name,
            key: item.code,
            link: `/${type}/${subtype}/${item.code}`,
          }
        })
    ).reduce((acc, word) => {
      let firstLetter = word.name[0].toLocaleUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [word];
      } else {
        acc[firstLetter].push(word);
      }
      return acc;
    }, {});

  const letteredSubgroups = Object.keys(subgroups).length === 0 ?
    [] :
    Object.keys(subgroups).map((key, index) => (
      <div id={key} key={index} className={classes.letteredSubgroup}>
        <div className={classes.letter}>
          {key}
        </div>
        <div className={classes.letteredItems}>
          <ItemsContainer data={subgroups[key]} small className={classes.itemsContainer} />
        </div>
      </div>
    ));

  useEffect(() => {
    if (alphabet.length !== 0 && !currentChar) {
      setCurrentChar(alphabet[0]);
    }

  }, [alphabet]);

  useEffect(() => {
    if (subgroupsRef.current) {
      subgroupsRef.current.addEventListener('scroll', onScroll);
    }
    return () => {
      subgroupsRef.current.removeEventListener('scroll', onScroll);
    };
  }, [subgroupsRef.current]);

  return (
    <div className={classes.subgroupContainer}>
      <AlphabetIndex
        letters={alphabet}
        currentChar={currentChar}
        onClick={(char) => scrollToChar(char)}
        alphabetRef={alphabetRef}
      />
      <div className={classes.letteredSubgroups} ref={subgroupsRef}>
        {letteredSubgroups}
      </div>
    </div>
  );
}

SubgroupContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SubgroupContainer.defaultProps = {
  data: [],
};

