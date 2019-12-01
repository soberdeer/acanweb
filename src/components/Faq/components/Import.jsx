import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../../typography/Text/Text';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Import({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  function onToggle() {
    setOpened(!opened);
    if (!opened) {
      setTimeout(() => document.getElementById('import').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }

  return (
    <div id="import" {...others}>
      <button
        className={classes.titleButton}
        onClick={onToggle}
      >
        3. Маркировка при импортном оборудовании
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <Text noHyphens>
            <span>Если предприятие использует импортное оборудование, то кодировка наносится в </span>
            <span className={classes.bold}>две строки:</span>
          </Text>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>Р-29-03-19</span>
            <div>
              <span className={classes.code}>1-</span>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>-П08</span>
            </div>
          </div>
          <ul>
            <li><Text>Первая строка: буква "Р" и дата производства.</Text></li>
            <li>
              <Text>
                <span>Вторая строка: номер смены (может отсутствовать), </span>
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

Import.propTypes = {
  classes: PropTypes.object.isRequired,
};
