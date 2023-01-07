import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addPost, addMessage, updateNewPost, updateNewMessage, RootStateType, subscriber,} from './redux/state';


export const renderTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewPost={updateNewPost}
            updateNewMessage={updateNewMessage}
        />,
        document.getElementById('root')
    );
}

renderTree()
subscriber(renderTree);