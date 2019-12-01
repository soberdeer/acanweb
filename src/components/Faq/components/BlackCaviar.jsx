import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../typography/Text/Text';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function BlackCaviar({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  function onToggle() {
    setOpened(!opened);
    if (!opened) {
      setTimeout(() => document.getElementById('black_caviar').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }), 100)
    }
  }

  return (
    <div id="black_caviar" {...others}>
      <button
        className={classes.titleButton}
        onClick={onToggle}
      >
        5. Маркировка икры осетровых рыб
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <Text noHyphens>Вам повезло! Вы держите в руках черную икру! :)</Text>
          <Text noHyphens>
            <span>Будьте внимательны, кодировка отличается от других и должна состоять из </span>
            <span className={classes.bold}>двух строк:</span>
          </Text>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>1-03-9</span>
            <div>
              <span className={classes.code}>2</span>
            </div>
          </div>
          <ul>
            <li>
              <Text noHyphens>
                Первая строка: дата производства из четырех цифр - декада в месяце (1, 2 или 3), месяц (две цифры) и год (1 цифра).
              </Text>
            </li>
            <li><Text noHyphens>Вторая строка: номер, присвоенный мастеру - одна или две цифры</Text></li>
          </ul>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

BlackCaviar.propTypes = {
  classes: PropTypes.object.isRequired,
};
