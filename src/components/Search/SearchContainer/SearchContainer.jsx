import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import ItemsContainer from '../../items/ItemsContainer/ItemsContainer';
import Search from '../Search/Search';
import useStyles from './SearchContainer.styles';

export default function SearchContainer({ data }) {
  const classes = useStyles();

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
    }
  }

  const groupsData = !data ? [] :
    data.map(group => ({
      name: group.group_name,
      key: group.group_name === 'Консервы' ? 'canned' : 'cured',
      link: group.group_name === 'Консервы' ? '/canned' : '/cured',
    }));

  return (
    <div className={classes.searchContainer}>
      <div className={classes.inner}>
        <ItemsContainer data={groupsData} className={classes.groupsContainer} />

        <Search
          placeholder="Введите код продукции"
          style={{ minWidth: 300 }}
          onKeyDown={onKeyDown}
          data={data}
          dataKey="group_data"
          subgroupKey="subgroup_data"
        />
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

