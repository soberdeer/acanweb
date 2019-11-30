import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function BlackCaviar({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  return (
    <div {...others}>
      <button
        className={classes.titleButton}
        onClick={() => setOpened(!opened)}
      >
        5. Кодировка икры осетровых рыб
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <p>
            <span>Вам повезло! Вы держите в руках черную икру! </span>
          </p>
          <span>Будьте внимательны, кодировка отличается от других и должна состоять из </span>
          <span className={classes.bold}>двух строк:</span>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>1039</span>
            <div>
              <span className={classes.code}>2</span>
            </div>
          </div>
          <ul>
            <li>Первая строка: дата производства из четырех цифр - декада в месяце (1, 2 или 3), месяц (две цифры) и год (1 цифра).</li>
            <li>Вторая строка: номер, присвоенный мастеру - одна или две цифры</li>
          </ul>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

BlackCaviar.propTypes = {
  classes: PropTypes.object.isRequired,
};
