import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DialogType, MessageType } from './components/Dialogs/Dialogs';
import { PostsType } from './components/Profile/Profile';

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

const posts: Array<PostsType> = [
  {id: 1, message: 'Hello my friend!', countLikes: 5},
  {id: 2, message: 'How are you?', countLikes: 7},
  {id: 3, message: 'Do you look a new movie?', countLikes: 15},
  {id: 4, message: 'Yes, I do', countLikes: 21},
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);