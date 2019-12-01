import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { mapGroupNameFromKey } from '../../../utils/mapGroupName';
import { mappedSubgroupName } from '../../../utils/constants';
import NoMatchContainer from '../../NoMatchContainer/NoMatchContainer';
import Label from '../../common/Label/Label';
import Card from '../../common/Card/Card';
import Title from '../../typography/Title/Title';
import useStyles from './ItemIndex.styles';

export default function ItemIndex({ data }) {
  const classes = useStyles();
  const { type, subtype, code } = useParams();
  const groupName = mapGroupNameFromKey(type);
  const subgroupName = mappedSubgroupName[subtype];

  if (!groupName || !mappedSubgroupName[subtype]) {
    return <NoMatchContainer />
  }

  const groupData = data ? data.find(group => group.group_name === groupName).group_data : null;
  const subgroupData = groupData ?
    groupData.find(subgroup => subgroup.subgroup_name === subgroupName).subgroup_data :
    null;
  const itemData = subgroupData ? subgroupData.find(item => item.code.toLowerCase() === code.toLowerCase()) : null;


  if (subgroupData && !itemData) {
    return <NoMatchContainer />
  }

  return (
    <div className={classes.itemContainer}>
      <Link to={`/${type}/${subtype}`} className={classes.backContainer}>
        <ArrowLeft size={20} className={classes.arrow} />
        <Title className={classes.backText}>Вернуться к списку</Title>
      </Link>
      <div className={classes.inner}>
        <div className={classes.image}>
          <Card icon={subtype} size={150} className={classes.icon} />
        </div>
        <div className={classes.description}>
          <div className={classes.labels}>
            <Label name={subtype}>
              {subgroupName}
            </Label>
          </div>
          <Title noHyphens>
            {itemData && itemData.name}
          </Title>
          <div className={classes.subtitle}>
            {itemData && itemData.code}
          </div>
        </div>
      </div>
    </div>
  );
}

ItemIndex.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

ItemIndex.defaultProps = {
  data: [],
};

