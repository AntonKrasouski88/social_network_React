import React from 'react';
import './App.css';
import logo from './img/logo/logo.png'


function App() {
    return (
        <div className={'container'}>
            <header className={'header'}>
                <img src={logo} alt={'logo_social_network'}/>
            </header>
            <nav className={'nav'}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
            </nav>
            <div className={'content'}>
                Main content
            </div>
        </div>
    );
}

export default App;
