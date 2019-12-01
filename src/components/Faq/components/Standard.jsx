import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Text from '../../typography/Text/Text';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Standard({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  function onToggle() {
    setOpened(!opened);
    if (!opened) {
      setTimeout(() => document.getElementById('standard').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }

  return (
    <div id="standard" {...others}>
      <button
        className={classes.titleButton}
        onClick={onToggle}
      >
        1. Самый частый вариант маркировки
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <Text noHyphens>
            <span>Чаще всего встречается кодировка из </span>
            <span className={classes.bold}>трех строк</span>
            <span>, она выглядит так:</span>
          </Text>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>29-03-19</span>
            <div>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>-П08</span>
            </div>
            <span className={classes.code}>1-Р</span>
          </div>
          <ul>
            <li><Text>Первая строка: дата производства.</Text></li>
            <li><Text>Вторая строка: код продукции и код производителя.</Text></li>
            <li><Text>Третья строка: номер смены и буква Р, обозначающая "рыба".</Text></li>
          </ul>
          <Text>
            <span>Необходимый для поиска код выделен синим цветом: это </span>
            <span className={cx(classes.assort, classes.innerCode)}>первые три знака</span>
            <span> на второй строке.</span>
          </Text>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

Standard.propTypes = {
  classes: PropTypes.object.isRequired,
};
