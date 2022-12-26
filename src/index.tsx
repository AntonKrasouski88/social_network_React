import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';



ReactDOM.render(
    <App dialogs = {state.dialogsPage.dialogs} 
         messages={state.dialogsPage.messages} 
         posts={state.profilePage.posts}
         sidebarFriends={state.sidebar.friends}/>,
  document.getElementById('root')
);