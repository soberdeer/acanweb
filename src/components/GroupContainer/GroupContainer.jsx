import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { mapGroupNameFromKey } from '../../utils/mapGroupName';
import { mappedSubgroupName } from '../../utils/constants';
import NoMatchContainer from '../NoMatchContainer/NoMatchContainer';
import ItemsContainer from '../items/ItemsContainer/ItemsContainer';

export default function SubgroupContainer({ data }) {
  const { type } = useParams();
  const groupName = mapGroupNameFromKey(type);

  if (!groupName) {
    return <NoMatchContainer />
  }

  const groupData = data ? data.find(group => groupName === group.group_name).group_data : null;

  const subgroups = !groupData ?
    [] :
    groupData.map(subgroup => {
      const subgroupKey = Object.keys(mappedSubgroupName).find(key => mappedSubgroupName[key] === subgroup.subgroup_name);
      return {
        name: subgroup.subgroup_name,
        key: subgroupKey,
        link: `/${type}/${subgroupKey}`,
      }
    });

  return <ItemsContainer data={subgroups} />
}

SubgroupContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SubgroupContainer.defaultProps = {
  data: [],
};

