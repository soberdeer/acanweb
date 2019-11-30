import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function AutoHeightComponent({
  opened,
  duration,
  style,
  minHeight,
  startClosed,
  children,
  ...others
}) {
  const ref = useRef(null);
  const [isSecondRender, setIsSecondRender] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  function onToggle() {
    if (ref.current.style.height === `${minHeight}px`) {
      ref.current.style.height = `${scrollHeight}px`;
    } else {
      ref.current.style.height = `${scrollHeight}px`;
      window.getComputedStyle(ref.current, null).getPropertyValue('height');
      ref.current.style.height = `${minHeight}px`;
    }
  }

  function onTransitionEnd() {
    if (ref.current.style.height !== `${minHeight}px`) {
      ref.current.style.height = 'auto';
    }
  }

  //eslint-disable-next-line
  useEffect(() => {
    if (ref.current) {
      if (isSecondRender) {
        onToggle();
      } else {
        if (startClosed) {
          onToggle();
        }
        setIsSecondRender(true);
        setScrollHeight(ref.current.scrollHeight);
      }

      ref.current.addEventListener('transitionend', onTransitionEnd);

      return () => {
        ref.current.removeEventListener('transitionend', onTransitionEnd);
      };
    }
  }, [opened]);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        overflow: 'hidden',
        transition: `height ${duration}ms ease`,
      }}
      {...others}
    >
      {children}
    </div>
  );
}

AutoHeightComponent.propTypes = {
  children: PropTypes.node, // single dom element that should be animated
  opened: PropTypes.bool.isRequired, // true if component should be opened, false otherwise
  duration: PropTypes.number.isRequired, // animation duration in ms
  minHeight: PropTypes.number,
  startClosed: PropTypes.bool,
  style: PropTypes.object, // style of the component
};

AutoHeightComponent.defaultProps = {
  children: null,
  minHeight: 0,
  startClosed: false,
  style: null,
};
