import React from 'react';
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

function App() {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Navbar/>
                <div className={'container-content'}>
                    <Route path={'/Profile'} component={Profile}/>
                    <Route path={'/Messages'} component={Dialogs}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
