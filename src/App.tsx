import React from 'react';
import './App.css';
import logo from 'img/logo/logo.png'


function App() {
    return (
        <div>
            <header>
                <img src="img/logo/logo.png" alt={`logo`}/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
            </nav>
            <div>
                Main content
            </div>
        </div>
    );
}

export default App;
