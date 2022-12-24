import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DialogType, MessageType } from './components/Dialogs/Dialogs';

const dialogs: Array<DialogType> = [
  {id: 1, name: 'Kristina'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Lina'},
  {id: 4, name: 'Bob'},
  {id: 5, name: 'Jan'},
];

const messages: Array<MessageType> = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'I will call you back'},
  {id: 4, message: 'YO'},
  {id: 5, message: 'YO'},
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);