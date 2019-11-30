import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useStyles from './AlphabetIndex.styles';

export default function SubgroupContainer({ letters, currentChar, onClick, alphabetRef, ...others }) {
  const classes = useStyles();

  const chars = letters.map((char, index) => {
    return (
      <button
        key={index}
        ref={alphabetRef}
        type="button"
        onClick={() => onClick(char)}
        className={cx(classes.char, {[classes.current]: currentChar === char})}
      >
        {char}
      </button>
    )
  });

  return (
    <div className={classes.alphabet} {...others}>
      {chars}
    </div>
  );
}

SubgroupContainer.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string),
  currentChar: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  alphabetRef: PropTypes.object,
};

SubgroupContainer.defaultProps = {
  letters: [],
  currentChar: null,
  alphabetRef: null,
};

