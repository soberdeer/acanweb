import React from 'react';
import { render } from 'react-dom';
import App from './App';

const style = {
  width: '100%',
  height: '100%',
};

render(<App style={style} />, document.getElementById('app'));
