import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../items/ItemsContainer/ItemsContainer';
import { mappedSubgroupName } from '../../utils/constants';
import useStyles from './SubgroupContainer.styles';

export default function SubgroupContainer({ data }) {
  const classes = useStyles();
  const { type, subtype } = useParams();
  const groupName = type === 'canned' ? 'Консервы' : 'Пресервы';
  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;
  const subgroupData = groupData ?
    groupData.find(group => mappedSubgroupName[ subtype ] === group.subgroup_name).subgroup_data : null;

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
    }
  }

  const subgroups = !subgroupData ?
    [] :
    subgroupData.map(item => {
      return {
        name: item.name,
        key: item.code,
        link: `${type}/${subtype}/${item.code}`,
      }
    });

  return (
    <ItemsContainer data={subgroups} small />
  );
}

SubgroupContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SubgroupContainer.defaultProps = {
  data: [],
};

