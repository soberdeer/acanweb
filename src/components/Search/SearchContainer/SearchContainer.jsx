import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Item from '../../items/Item/Item';
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
        icon={group.group_name === 'Консервы' ? 'canned' : 'cured'}
        title={group.group_name}
        link={group.group_name === 'Консервы' ? 'canned' : '/cured'}
        size={70}
      />
    ));

  return (
    <div className={classes.searchContainer}>
      <div className={classes.groupsContainer}>
        {groups}
      </div>

      <Search
        placeholder="Введите код продукции"
        style={{ minWidth: 400 }}
        onKeyDown={onKeyDown}
        data={data}
      />

    </div>
  );
}

SearchContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SearchContainer.defaultProps = {
  data: [],
};

