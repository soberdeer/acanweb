import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';
import useClickOutside from '../../../../utils/useClickOutside';
import { CSSTransition } from 'react-transition-group';
import useStyles, { TRANSITION_DURATION } from './SelectDropdown.styles';

export default function SelectDropdown({
  opened,
  onClose,
  children,
  searchTerm,
  onSearchTermChange,
  showSearch,
  searchPlaceholder,
  nothingFound,
}) {
  const wrapperRef = useRef(null);
  const classes = useStyles();

  const handleClose = () => {
    onSearchTermChange('');
    onClose();
  };

  useClickOutside(wrapperRef, handleClose);

  return (
    <CSSTransition
      in={opened}
      timeout={TRANSITION_DURATION}
      unmountOnExit
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exit: classes.leave,
        exitActive: classes.leaveActive,
      }}
    >
      <div
        className={classes.dropdown}
        onKeyDownCapture={event => {
          opened && event.stopPropagation();
          isEventKey(event, 'esc') && handleClose();
        }}
        ref={wrapperRef}
      >
        <Scrollbars autoHeight autoHeightMax={200}>
          {nothingFound ? (
            <div className={classes.nothingFound}>
              Ничего не найдено
            </div>
          ) : (
            children
          )}
        </Scrollbars>
      </div>
    </CSSTransition>
  );
}

SelectDropdown.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  searchTerm: PropTypes.string,
  onSearchTermChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  nothingFound: PropTypes.bool,
};

SelectDropdown.defaultProps = {
  searchTerm: '',
  onSearchTermChange: Function.prototype,
  showSearch: false,
  searchPlaceholder: '',
  nothingFound: false,
};
