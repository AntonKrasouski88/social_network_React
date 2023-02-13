import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { StoreContext } from './StoreContext';
import { store } from './redux/store';


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
            
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree();
store.subscribe(renderTree);