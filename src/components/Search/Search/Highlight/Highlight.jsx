import React from 'react';
import PropTypes from 'prop-types';
import oc from 'open-color';
import highlighter from '../../../../utils/highlighter';

export default function Highlight({ children, item, match, ...others }) {
  const { start, end, highlight } = match.indices ? highlighter(children, match.indices[0]) : { start: children };

  return (
    <div {...others}>
      {!!start && start}
      {!!highlight && (
        <span data-highlight style={{ backgroundColor: oc.yellow[2] }}>
          {highlight}
        </span>
      )}
      {!!end && end}
    </div>
  );
}

Highlight.propTypes = {
  children: PropTypes.string,
  match: PropTypes.shape({
    indices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    value: PropTypes.string,
    key: PropTypes.string,
    arrayIndex: PropTypes.number,
  }),
};

Highlight.defaultProps = {
  children: '',
  match: {},
};
