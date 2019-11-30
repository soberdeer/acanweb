import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Second({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  return (
    <div {...others}>
      <button
        className={classes.titleButton}
        onClick={() => setOpened(!opened)}
      >
        2. Второй вариант кодировки
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <span>В случае, если на предприятии только одна смена, то наносится только </span>
          <span className={classes.bold}>две строки:</span>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>290319</span>
            <div>
              <span className={classes.code}>Р</span>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>П08</span>
            </div>
          </div>
          <ul>
            <li>Первая строка: дата производства.</li>
            <li>
              <span>Вторая строка: буква Р, </span>
              <span className={cx(classes.assort, classes.innerCode)}>код продукции</span>
              <span> и код производителя.</span>
            </li>
          </ul>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

Second.propTypes = {
  classes: PropTypes.object.isRequired,
};
