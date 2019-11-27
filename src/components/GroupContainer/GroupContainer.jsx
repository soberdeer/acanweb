import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../items/ItemsContainer/ItemsContainer';
import { mappedSubgroupName } from '../../utils/constants';
import useStyles from './GroupContainer.styles';

export default function SubgroupContainer({ data }) {
  const classes = useStyles();
  const { type } = useParams();
  const groupName = type === 'canned' ? 'Консервы' : 'Пресервы';
  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
    }
  }

  const subgroups = !groupData ?
    [] :
    groupData.map(subgroup => {
      const subgroupKey = Object.keys(mappedSubgroupName).find(key => mappedSubgroupName[ key ] === subgroup.subgroup_name);
      return {
        name: subgroup.subgroup_name,
        key: subgroupKey,
        link: `${type}/${subgroupKey}`,
      }
    });

  return <ItemsContainer data={subgroups}/>
}

SubgroupContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SubgroupContainer.defaultProps = {
  data: [],
};

