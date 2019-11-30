import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { useParams } from 'react-router-dom';
import { mappedSubgroupName } from '../../utils/constants';
import AlphabetIndex from '../AlphabetIndex/AlphabetIndex';
import ItemsContainer from '../items/ItemsContainer/ItemsContainer';
import useStyles from './SubgroupContainer.styles';

export default function SubgroupContainer({ data }) {
  const classes = useStyles();
  const { type, subtype } = useParams();
  const [currentChar, setCurrentChar] = useState(null);
  const groupName = type === 'canned' ? 'Консервы' : 'Пресервы';
  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;
  const subgroupData = groupData ?
    groupData.find(group => mappedSubgroupName[subtype] === group.subgroup_name).subgroup_data : null;
  const alphabet = [];

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
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

  const letteredSubgroups = !Object.keys(subgroups).length === 0 ?
    [] :
    Object.keys(subgroups).map((key, index) => (
      <div key={index} className={classes.letteredSubgroup}>
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

  return (
    <div className={classes.subgroupContainer}>
      <AlphabetIndex letters={alphabet} currentChar={currentChar} onClick={(char) => setCurrentChar(char)} />
      <div className={classes.letteredSubgroups}>
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

