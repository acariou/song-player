import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import App from './App';

test('renders withOut crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
