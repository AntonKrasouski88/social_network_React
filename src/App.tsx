import React from 'react';
import './App.css'
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
//import { ActionsType, RootStateType } from './redux/store';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


/* export type AppPropsType = {
    state: RootStateType,
    dispatch: (action: ActionsType) => void,
} */


function App(/* props: AppPropsType */) {
    return (
        <>
            <div className={'container'}>
                <Header />
                <Navbar /* friends={props.state.sidebar.friends}  *//>
                <div className={'container-content'}>
                    <Route path={'/Profile'}
                        render={() =>
                            <Profile
                                /* state={props.state.profilePage}
                                dispatch={props.dispatch} */
                            />}

                    />
                    <Route
                        path={'/Dialogs'}
                        render={() =>
                            <DialogsContainer
                                /* state={props.state.dialogsPage}
                                dispatch={props.dispatch} */
                            />}
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
