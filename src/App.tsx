import React from 'react';
import './App.css'
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';



function App() {
    return (
        <>
            <div className={'container'}>
                <Header />
                <Navbar/>
                <div className={'container-content'}>
                    <Route path={'/Profile'}
                        render={() =>
                            <Profile/>
                        }

                    />
                    <Route
                        path={'/Dialogs'}
                        render={() =>
                            <DialogsContainer />
                        }
                    />
                    <Route path={'/News'} component={News} />
                    <Route path={'/Music'} component={Music} />
                    <Route path={'/Setting'} component={Setting} />
                </div>
            </div>
        </>
    );
}

export default App;