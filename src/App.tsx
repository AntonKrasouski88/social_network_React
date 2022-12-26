import React from 'react';
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar, { SidebarFriends } from "./components/Navbar/Navbar";
import Profile, { PostsType } from "./components/Profile/Profile";
import Dialogs, { MessageType } from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {DialogType} from "./components/Dialogs/Dialogs"

export type AppPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostsType>
    sidebarFriends: Array<SidebarFriends>
}



function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Navbar sidebarFriends={props.sidebarFriends}/>
                <div className={'container-content'}>
                    <Route path={'/Profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
