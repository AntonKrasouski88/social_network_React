import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/state';
import {BrowserRouter} from "react-router-dom";


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewPost={store.updateNewPost.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree();
store.subscriber(renderTree);