import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, state } from './redux/state';
import { addPost } from './redux/state';



ReactDOM.render(
    <App state = {state}
         addPost = {addPost}
         addMessage = {addMessage}/>,
  document.getElementById('root')
);