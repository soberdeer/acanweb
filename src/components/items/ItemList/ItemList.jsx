import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from '../Item/Item';
import useStyles from './ItemList.styles';

export default function ItemList({ items, mainGroup }) {
  const classes = useStyles();
  const nameKey = items.length > 0 ? Object.keys(items[0]).find(key => key.includes('name') !== undefined) : null;

  return (
    <div className={classes.itemListContainer}>
      {items.map((item, index) =>
        <Item
          index={index}
        >
          <div className={classes.itemContent}>
            <div className={classes.topData}>
              <div className={cx(classes.label, { [classes.cured]: mainGroup === 'Пресервы' })}>
                {mainGroup}
              </div>
              {item.code && (
                <div className={classes.itemCode}>
                  {item.code}
                </div>
              )}
            </div>
            {nameKey && (
              <div className={classes.name}>
                {item[nameKey]}
              </div>
            )}

          </div>
        </Item>,
      )}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  mainGroup: PropTypes.oneOf(['Консервы', 'Пресервы']).isRequired,
};

ItemList.defaultTypes = {
  items: [],
  title: null,
};
