import React from 'react';
import cx from 'classnames';
import Standard from './components/Standard';
import Second from './components/Second';
import Import from './components/Import';
import Caviar from './components/Caviar';
import BlackCaviar from './components/BlackCaviar';
import useStyles from './Faq.styles';

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.faqContainer}>
      <div className={classes.faq}>
        <div className={classes.title}>
          Как найти код рыбной продукции
        </div>
        <div className={classes.description}>
          <p>
            <span>Согласно </span>
            <a
              href="http://docs.cntd.ru/document/1200022228"
              target="_blank"
              className={cx(classes.link, classes.bold)}
            >
              ГОСТ 11771-93
            </a>
            <span> существует несколько вариантов маркировки рыбной продукции в зависимости от смен, оборудования и т.д.</span>
          </p>
          <Standard classes={classes} />
          <Second classes={classes} style={{paddingTop: 10}} />
          <Import classes={classes} style={{paddingTop: 10}} />
          <Caviar classes={classes} style={{paddingTop: 10}} />
          <BlackCaviar classes={classes} style={{paddingTop: 10}} />
        </div>
      </div>
    </div>
  );
}
