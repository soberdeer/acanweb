import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { useParams } from 'react-router-dom';
import Item from '../../items/Item/Item';
import useStyles from './ItemsContainer.styles';

export default function ItemsContainer({ data, small }) {
  const classes = useStyles();
  const [ opacity, setOpacity ] = useState(0);

  useEffect(() => {
    setTimeout(() => (setOpacity(1)), 100);
  }, []);

  const items = data.map((item, index) => {
      return <Item
        key={index}
        icon={item.key}
        title={item.name}
        link={item.link}
        size={70}
        small={small}
        style={{
          opacity,
          transitionDelay: `${index * 20}ms`,
          width: small ? '100%' : 'unset',
          display: small ? 'flex' : 'block',
          justifyContent: 'center',
        }}
      />;
    });

  return (
    <div className={classes.itemsContainer}>
      <div className={classes.groupsContainer} style={{flexDirection: small ? 'column' : 'row'}}>
        {items}
      </div>
    </div>
  );
}

ItemsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  small: PropTypes.bool,
};

ItemsContainer.defaultProps = {
  data: [],
  small: false,
};

