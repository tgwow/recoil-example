import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';

ReactDOM.render(
  <React.StrictMode>
	  <RecoilRoot>
			{/*<CharacterCounter/>*/}
			<TodoList/>
	  </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

