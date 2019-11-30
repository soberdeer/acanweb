import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AutoHeightComponent from '../../../utils/AutoHeightComponent';

export default function Standard({ classes, ...others }) {
  const [opened, setOpened] = useState(false);

  return (
    <div {...others}>
      <button
        className={classes.titleButton}
        onClick={() => setOpened(!opened)}
      >
        1. Самый частый вариант кодировки
      </button>
      <AutoHeightComponent opened={opened} duration={200} startClosed>
        <div className={classes.topic}>
          <span>Чаще всего встречается кодировка из </span>
          <span className={classes.bold}>трех строк</span>
          <span>, она выглядит так:</span>
          <div className={classes.codeWrapper}>
            <span className={classes.code}>290319</span>
            <div>
              <span className={cx(classes.code, classes.assort)}>931</span>
              <span className={classes.code}>П08</span>
            </div>
            <span className={classes.code}>1Р</span>
          </div>
          <ul>
            <li>Первая строка: дата производства.</li>
            <li>Вторая строка: код продукции и код производителя.</li>
            <li>Третья строка: номер смены и буква Р, обозначающая "рыба".</li>
          </ul>
          <span>Необходимый для поиска код выделен синим цветом: это </span>
          <span className={cx(classes.assort, classes.innerCode)}>первые три знака</span>
          <span> на второй строке.</span>
        </div>
      </AutoHeightComponent>
    </div>
  );
}

Standard.propTypes = {
  classes: PropTypes.object.isRequired,
};
