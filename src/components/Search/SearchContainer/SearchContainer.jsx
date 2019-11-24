import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Item from '../../Item/Item/Item';
import Search from '../Search/Search';
import useStyles from './SearchContainer.styles';

export default function SearchContainer({ data }) {
  const classes = useStyles();

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
    }
  }

  const groups = !data ?
    [] :
    data.map(group => (
      <Item
        key={group.group_name}
        icon={group.group_name === 'Консервы' ? 'Canned' : 'Cured'}
        title={group.group_name}
      />
    ));

  return (
    <div className={classes.searchContainer}>
      <Search
        placeholder="Введите код продукции"
        component="input"
        type="undefined"
        style={{ minWidth: 400 }}
        onKeyDown={onKeyDown}
      />

      <div className={classes.groupsContainer}>
        {groups}
      </div>
    </div>
  );
}

SearchContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SearchContainer.defaultProps = {
  data: null,
};

