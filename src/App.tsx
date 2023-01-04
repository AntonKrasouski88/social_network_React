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
import { RootStateType } from './redux/state';


export type AppPropsType = {
    state: RootStateType,
    addPost: (post:string)=>void,
    addMessage: (message:string)=>void,
}



function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className={'container-content'}>
                    <Route path={'/Profile'} render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route 
                        path={'/Dialogs'} 
                        render={() => <Dialogs 
                                        dialogs={props.state.dialogsPage.dialogs} 
                                        messages={props.state.dialogsPage.messages}
                                        addMessage ={props.addMessage}/>}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
