import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../../typography/Text/Text';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Second({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  function onToggle() {
    setOpened(!opened);
    if (!opened) {
      setTimeout(() => document.getElementById('second').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }

  return (
    <div id="second" {...others}>
      <button
        className={classes.titleButton}
        onClick={onToggle}

      >
        2. Второй вариант маркировки
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <Text noHyphens>
            <span>В случае, если на предприятии только одна смена, то наносится только </span>
            <span className={classes.bold}>две строки:</span>
          </Text>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>29-03-19</span>
            <div>
              <span className={classes.code}>Р-</span>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>-П08</span>
            </div>
          </div>
          <ul>
            <li><Text>Первая строка: дата производства.</Text></li>
            <li>
              <Text>
                <span>Вторая строка: буква Р, </span>
                <span className={cx(classes.assort, classes.innerCode)}>код продукции</span>
                <span> и код производителя.</span>
              </Text>
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
