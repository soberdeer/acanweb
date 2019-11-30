import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { mapGroupNameFromKey } from '../../../utils/mapGroupName';
import { mappedSubgroupName } from '../../../utils/constants';
import useStyles from './ItemIndex.styles';

export default function ItemIndex({ data }) {
  const classes = useStyles();
  const { type, subtype, code } = useParams();
  const groupName = mapGroupNameFromKey(type);
  const groupData = data ? data.find(group => group.group_name === groupName).group_data : null;
  const subgroupData = groupData ?
    groupData.find(subgroup => subgroup.subgroup_name === mappedSubgroupName[subtype]).subgroup_data :
    null;
  const itemData = subgroupData ? subgroupData.find(item => item.code.toLowerCase() === code.toLowerCase()) : null;


  return (
    <div className={classes.itemContainer}>

    </div>
  );
}

ItemIndex.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

ItemIndex.defaultProps = {
  data: [],
};

