import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { useParams } from 'react-router-dom';
import Item from '../../items/Item/Item';
import { mappedSubgroupName } from '../../../utils/constants';
import useStyles from './ItemsContainer.styles';

export default function ItemsContainer({ data }) {
  const classes = useStyles();
  const { type, subtype } = useParams();
  const [ opacity, setOpacity ] = useState(0);
  const groupName = type === 'canned' ? 'Консервы' : 'Пресервы';
  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;
  const subgroupData = groupData && subtype;

  // console.log(groupData)

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
    }
  }

  useEffect(() => {
    setTimeout(() => (setOpacity(1)), 100);
  }, []);

  const subgroups = !groupData ?
    [] :
    groupData.map((subgroup, index) => {
      const subgroupKey = Object.keys(mappedSubgroupName).find(key => mappedSubgroupName[key] === subgroup.subgroup_name);
      console.log(subgroupKey)
      return <Item
        key={index}
        icon={subgroupKey}
        title={subgroup.subgroup_name}
        link={`${type}/${subgroupKey}`}
        size={70}
        style={{
          opacity,
          transitionDelay: `${index * 20}ms`,
        }}
      />;
    });

  return (
    <div className={classes.itemsContainer}>
      <div className={classes.groupsContainer}>
        {subgroups}
      </div>
    </div>
  );
}

ItemsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ItemsContainer.defaultProps = {
  data: [],
};

