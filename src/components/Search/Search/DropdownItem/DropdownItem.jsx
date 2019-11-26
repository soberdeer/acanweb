import React  from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Highlight from '../Highlight/Highlight';
import useStyles from './DropdownItem.styles';

export default function DropdownItem({ foundObject, onClick }) {
  const classes = useStyles();

  return (
    <button
      className={classes.dropdownItem}
      type="button"
      onClick={onClick}
    >
      <Highlight
        match={foundObject.matches.find(match => match.key === 'name')}
        className={cx(classes.text, classes.name)}
      >
        {foundObject.item.name}
      </Highlight>
      <Highlight
        match={foundObject.matches.find(match => match.key === 'code')}
        className={cx(classes.text, classes.code)}
      >
        {foundObject.item.code}
      </Highlight>
    </button>
  );
}


DropdownItem.propTypes = {
  foundObject: PropTypes.shape({
    item: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
    matches: PropTypes.arrayOf(
      PropTypes.shape({
        indices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
        value: PropTypes.string,
        key: PropTypes.string,
        arrayIndex: PropTypes.number,
      }),
    ),
  }),
};

DropdownItem.defaultProps = {
  className: null,
  disabled: false,
  error: false,
  fixedHeight: true,
  chevronPosition: 'down',
  inputClassName: null,
};
