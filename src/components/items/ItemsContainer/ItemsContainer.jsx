import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BREAKPOINTS } from '../../../utils/constants';
import Item from '../../items/Item/Item';
import useStyles from './ItemsContainer.styles';

export default function ItemsContainer({ data, small, className, ...others }) {
  const classes = useStyles();
  const [opacity, setOpacity] = useState(0);
  const [iconSize, setIconSize] = useState(70);

  function resizeHandler() {
    if (window.innerWidth < BREAKPOINTS.mobile + 1) {
      setIconSize(50);
    } else {
      setIconSize(70);
    }
  }

  useEffect(() => {
    setTimeout(() => (
      setOpacity(1)), 100);
  }, []);

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [window.innerWidth]);

  const items = data.map((item, index) => {
    return <Item
      key={index}
      icon={item.key}
      title={item.name}
      link={item.link}
      code={item.code}
      size={iconSize}
      small={small}
      style={{
        opacity,
        transitionDelay: `${index * 20}ms`,
        display: small ? 'flex' : 'block',
        justifyContent: 'center',
      }}
    />;
  });

  return (
    <div className={cx(classes.itemsContainer, className)} {...others}>
      <div
        className={classes.groupsContainer}
        style={{
          flexFlow: small ? 'column nowrap' : 'row wrap',
          display: small ? 'block' : 'flex',
          marginLeft: small ? 'auto' : 'unset',
          marginRight: small ? 'auto' : 'unset',
          paddingTop: small ? 0 : 30,
          paddingBottom: small ? 0 : 5,
        }}
      >
        {items}
      </div>
    </div>
  );
}

ItemsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  small: PropTypes.bool,
  className: PropTypes.string,
};

ItemsContainer.defaultProps = {
  data: [],
  small: false,
  className: null,
};

