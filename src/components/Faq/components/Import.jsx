import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Import({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  return (
    <div {...others}>
      <button
        className={classes.titleButton}
        onClick={() => setOpened(!opened)}
      >
        3. Кодировка при импортном оборудовании
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <span>Если предприятие использует импортное оборудование, то кодировка наносится в </span>
          <span className={classes.bold}>две строки:</span>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>Р290319</span>
            <div>
              <span className={classes.code}>1</span>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>П08</span>
            </div>
          </div>
          <ul>
            <li>Первая строка: буква "Р" и дата производства.</li>
            <li>
              <span>Вторая строка: номер смены (может отсутствовать), </span>
              <span className={cx(classes.assort, classes.innerCode)}>код продукции</span>
              <span> и код производителя.</span>
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
