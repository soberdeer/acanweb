import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Search as SearchIcon } from 'react-feather';
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
  ...others
}) {
  const classes = useStyles();

  return (
    <div className={cx(classes.wrapper, classes[chevronPosition], className)}>
      <Element
        {...others}
        type={type}
        disabled={disabled}
        className={cx(
          classes.input,
          {
            [classes.error]: error,
            [classes.fixedHeight]: fixedHeight,
            [classes.buttonType]: type === 'button',
          },
          inputClassName,
        )}
      />
      <SearchIcon className={classes.chevron} size={18} />
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
};

Search.defaultProps = {
  className: null,
  disabled: false,
  error: false,
  fixedHeight: true,
  chevronPosition: 'down',
  inputClassName: null,
};
