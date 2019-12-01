import React from 'react';
import Text from '../typography/Text/Text';
import Title from '../typography/Title/Title';
import Link from '../typography/Link/Link';
import Standard from './components/Standard';
import Second from './components/Second';
import Import from './components/Import';
import Caviar from './components/Caviar';
import BlackCaviar from './components/BlackCaviar';
import WhereAmI from './components/WhereAmI';
import useStyles from './Faq.styles';

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.faq}>
      <WhereAmI classes={classes} />

      <Title className={classes.mainTitle}>
        Как найти код рыбной продукции
      </Title>
      <div className={classes.description}>
        <div className={classes.topic}>
          <Text noHyphens>
            <span>Согласно </span>
            <Link
              href="http://docs.cntd.ru/document/1200022228"
              target="_blank"
            >
              ГОСТ 11771-93
            </Link>
            <span> существует несколько вариантов маркировки рыбной продукции в зависимости от смен, оборудования и т.д.</span>
          </Text>
        </div>
        <Standard classes={classes} />
        <Second classes={classes} />
        <Import classes={classes} />
        <Caviar classes={classes} />
        <BlackCaviar classes={classes} style={{ paddingBottom: 30 }} />
      </div>
    </div>
  );
}
