import React from 'react';
import PropTypes from 'prop-types';
import {mapGroupName} from '../../../utils/mapGroupName';
import ItemsContainer from '../../items/ItemsContainer/ItemsContainer';
import Search from '../Search/Search';
import useStyles from './SearchContainer.styles';
import Title from '../../typography/Title/Title';
import Text from '../../typography/Text/Text';

export default function SearchContainer({ data }) {
  const classes = useStyles();

  const groupsData = !data ? [] :
    data.map(group => ({
      name: group.group_name,
      key: mapGroupName(group.group_name),
      link: `/${mapGroupName(group.group_name)}`,
    }));

  return (
    <div className={classes.searchContainer}>
      <div className={classes.header}>
        <Title className={classes.title}>
          fishCan
        </Title>
        <Text className={classes.subtitle}>
          Быстрый поиск рыбы
        </Text>
      </div>
      <div className={classes.inner}>
        <ItemsContainer data={groupsData} className={classes.groupsContainer} />

        <div className={classes.inputWrapper}>
          <Search
            placeholder="Введите код продукции"
            data={data}
            dataKey="group_data"
            subgroupKey="subgroup_data"
          />
        </div>
      </div>
    </div>
  );
}

SearchContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SearchContainer.defaultProps = {
  data: [],
};

