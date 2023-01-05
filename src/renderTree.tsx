import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, RootStateType,} from './redux/state';
import { addPost } from './redux/state';


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state = {state}
             addPost = {addPost}
             addMessage ={addMessage}/>,
      document.getElementById('root')
    );
}
