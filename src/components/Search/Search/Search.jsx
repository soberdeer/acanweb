import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Fuse from 'fuse.js';
import { Search as SearchIcon } from 'react-feather';
import SelectDropdown from './SelectDropdown/SelectDropdown';
import DropdownItem from './DropdownItem/DropdownItem';
import useStyles from './Search.styles';

export default function Search({
  disabled,
  error,
  data,
  ...others
}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const itemNames = !data ?
    [] :
    data.reduce((result, current) => {
      const subdata = [];
      current.group_data.forEach(subgroup => subgroup.subgroup_data.forEach(item => subdata.push(item)));
      return result.concat(subdata);
    }, []);


  function closeDropdown() {
    setShowDropdown(false);
  }

  function onChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
    if (value !== '' && value.length > 1) {
      setShowDropdown(true);
    } else {
      closeDropdown();
    }
  }

  function getFuse() {
    return new Fuse(itemNames, {
      shouldSort: true,
      threshold: 0.35,
      includeMatches: true,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'name',
        'code',
      ],
    })
      .search(searchTerm);
  }

  const selectItems = searchTerm.length > 1 ?
    getFuse().slice(0, 10).map((value, index) => (
      <DropdownItem key={index} foundObject={value} />)) : [];

  return (
    <div className={classes.wrapper}>
      <input
        {...others}
        disabled={disabled}
        value={searchTerm}
        className={cx(classes.input, { [classes.error]: error })}
        onChange={onChange}
      />
      <SearchIcon className={classes.searchIcon} size={18} />
      <SelectDropdown
        opened={showDropdown}
        onSearchTermChange={setSearchTerm}
        onClose={closeDropdown}
        nothingFound={selectItems.length === 0}
      >
        <div>
          {selectItems}
        </div>
      </SelectDropdown>
    </div>
  );
}


Search.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      group_name: PropTypes.string,
      group_data: PropTypes.arrayOf(
        PropTypes.shape({
          subgroup_name: PropTypes.string,
          subgroup_data: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string,
              code: PropTypes.string,
            }),
          ),
        }),
      ),
    }),
  ),
};

Search.defaultProps = {
  disabled: false,
  error: false,
};
