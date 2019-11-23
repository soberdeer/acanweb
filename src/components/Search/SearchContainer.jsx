import React from 'react';
import keycode from 'keycode';
import Search from './Search/Search';

export default function SearchContainer() {

  function onKeyDown(e) {
    if (keycode(e) === 'enter') {
      console.log('x');
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Search
        placeholder="Введите код продукции"
        component="input"
        type="undefined"
        style={{ minWidth: 400 }}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
