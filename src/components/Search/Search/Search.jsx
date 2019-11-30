import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Search as SearchIcon } from 'react-feather';
import mapGroupName from '../../../utils/mapGroupName';
import { mappedSubgroupName } from '../../../utils/constants';
import SelectDropdown from './SelectDropdown/SelectDropdown';
import DropdownItem from './DropdownItem/DropdownItem';
import useStyles from './Search.styles';

export default function Search({
  disabled,
  error,
  data,
  dataKey,
  subgroupKey,
  ...others
}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();

  const itemNames = !data ?
    [] :
    data.reduce((result, current) => {
      const subdata = [];
      subgroupKey ?
        current[dataKey]
          .forEach(subgroup => subgroup[subgroupKey]
            .forEach(item => subdata.push({
              ...item,
              subgroup_name: subgroup.subgroup_name,
              group_name: current.group_name,
            }))) :
        current[dataKey]
          .forEach(subgroup => subdata.push({ ...subgroup, subgroup_name: current.subgroup_name }));
      return result.concat(subdata);
    }, []);


  function closeDropdown() {
    setShowDropdown(false);
  }

  function onClick(foundObject) {
    const subgroupKey = Object.keys(mappedSubgroupName).find(key => mappedSubgroupName[key] === foundObject.item.subgroup_name);
    // history.push(`/${mapGroupName(foundObject.item.group_name)}/${subgroupKey}/${foundObject.item.code}`);
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
      <DropdownItem key={index} foundObject={value} onClick={onClick} />)) : [];

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
  data: PropTypes.array,
  dataKey: PropTypes.string.isRequired,
  subgroupKey: PropTypes.string,
};

Search.defaultProps = {
  disabled: false,
  error: false,
  data: [],
  subgroupKey: null,
};
