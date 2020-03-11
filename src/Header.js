import React from 'react';

export const Header = () => {
    return (
        <div className="App__header">
            <div className="App__header--logo">
                <img className="App__header--logo-img" src="logo.svg" alt="App logo" />
            </div>
            <div className="App__header--nav">
                <div><a href="/invite">Get Started</a></div>
                <div><a href="/Login">Login</a></div>
            </div>
        </div>
    );
};