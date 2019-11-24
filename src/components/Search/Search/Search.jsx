import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Fuse from 'fuse.js';
import { Search as SearchIcon } from 'react-feather';
import SelectDropdown from './SelectDropdown/SelectDropdown';
import DropdownItem from './DropdownItem/DropdownItem';
import useStyles from './Search.styles';

export default function Search({
  component: Element,
  className,
  type,
  disabled,
  error,
  fixedHeight,
  chevronPosition,
  inputClassName,
  data,
  ...others
}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [foundValues, setValues] = useState([]);

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
      <DropdownItem key={index} foundObject={value} />
    )) :
    <div>Nothing found</div>;

  return (
    <div className={cx(classes.wrapper, classes[chevronPosition], className)}>
      <Element
        {...others}
        type={type}
        disabled={disabled}
        value={searchTerm}
        className={cx(
          classes.input,
          {
            [classes.error]: error,
            [classes.fixedHeight]: fixedHeight,
            [classes.buttonType]: type === 'button',
          },
          inputClassName,
        )}
        onChange={onChange}
      />
      <SearchIcon className={classes.chevron} size={18} />
      <SelectDropdown opened={searchTerm !== ''} onSearchTermChange={setSearchTerm} onClose={closeDropdown}>
        <div>
          {selectItems}
        </div>
      </SelectDropdown>
    </div>
  );
}


Search.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fixedHeight: PropTypes.bool,
  chevronPosition: PropTypes.oneOf(['up', 'down']),
  inputClassName: PropTypes.string,
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
  className: null,
  disabled: false,
  error: false,
  fixedHeight: true,
  chevronPosition: 'down',
  inputClassName: null,
};
