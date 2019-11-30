import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './NoMatch.styles';

export default function NoMatch() {
  const classes = useStyles();

  return (
    <div className={classes.noMatch}>
      <div className={classes.title}>
        404
      </div>
      <div className={classes.subtitle}>
        Страница по этому адресу не найдена
      </div>
      <div className={classes.description}>
        <span>Если вы уверены, что страница существует, попробуйте перезагрузить страницу или </span>
        <Link to="/" className={classes.link}>вернитесь к поиску</Link>
      </div>
    </div>
  );
}
