import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Caviar({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  return (
    <div {...others}>
      <button
        className={classes.titleButton}
        onClick={() => setOpened(!opened)}
      >
        4. Кодировка икры лососевых рыб
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <span>Для банок с красной икрой действует </span>
          <a href="http://docs.cntd.ru/document/1200037092" className={classes.link}>ГОСТ 18173</a>
          <span>, предписывающий наносить кодировку в </span>
          <span className={classes.bold}>три строки:</span>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>290319</span>
            <div>
              <span className={cx(classes.code, classes.assort)}>ИКРА</span>
            </div>
            <span className={classes.code}>П081Р</span>
          </div>
          <ul>
            <li>Первая строка: дата производства.</li>
            <li>Вторая строка: ассортиментный знак - слово "икра".</li>
            <li>Третья строка: код производителя - три знака, номер смены и буква "Р".</li>
          </ul>
          <span>Так же может помочь наличие ГОСТа на банке: для консервированной икры это </span>
          <a href="http://docs.cntd.ru/document/1200037092" className={classes.link}>ГОСТ 18173-2004</a>
          <span>, для бочковой - </span>
          <a href="http://docs.cntd.ru/document/1200022185" className={classes.link}>ГОСТ 1629-97</a>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

Caviar.propTypes = {
  classes: PropTypes.object.isRequired,
};
