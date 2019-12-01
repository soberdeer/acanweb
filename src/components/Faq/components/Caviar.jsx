import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../../typography/Text/Text';
import Link from '../../typography/Link/Link';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Caviar({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  function onToggle() {
    setOpened(!opened);
    if (!opened) {
      setTimeout(() => document.getElementById('caviar').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }

  return (
    <div id="caviar" {...others}>
      <button
        className={classes.titleButton}
        onClick={onToggle}
      >
        4. Маркировка икры лососевых рыб
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <Text noHyphens>
            <span>Для банок с красной икрой действует </span>
            <Link href="http://docs.cntd.ru/document/1200037092" target="_blank">ГОСТ 18173</Link>
            <span>, предписывающий наносить кодировку в </span>
            <span className={classes.bold}>три строки:</span>
          </Text>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>29-03-19</span>
            <div>
              <span className={cx(classes.code, classes.assort)}>ИКРА</span>
            </div>
            <span className={classes.code}>П08-1-Р</span>
          </div>
          <ul>
            <li><Text>Первая строка: дата производства.</Text></li>
            <li><Text>Вторая строка: ассортиментный знак - слово "икра".</Text></li>
            <li><Text>Третья строка: код производителя - три знака, номер смены и буква "Р".</Text></li>
          </ul>
          <Text noHyphens>
            <span>Также может помочь наличие ГОСТа на банке: для консервированной икры это </span>
            <Link href="http://docs.cntd.ru/document/1200037092">ГОСТ 18173-2004</Link>
            <span>, для бочковой - </span>
            <Link href="http://docs.cntd.ru/document/1200022185">ГОСТ 1629-97</Link>
          </Text>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

Caviar.propTypes = {
  classes: PropTypes.object.isRequired,
};
