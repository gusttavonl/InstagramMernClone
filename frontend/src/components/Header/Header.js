import React from 'react';
import './Header.css';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Send from '@material-ui/icons/Send';
import Explore from '@material-ui/icons/Explore';
import Favorite from '@material-ui/icons/Favorite';
import {Avatar} from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <a href="#"><img className="headerLogo" src={"https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"} /></a>
                </div>
                <div className="col-4">
                    <input className="headerInput"/>
                    <button className="headerInputButton">
                        <Search className="headerSearchIcon" />
                        <p>Buscar</p>
                    </button>
                </div>
                <div className="col-4">
                    <div className="headerRight">
                        <Home />
                        <Send />
                        <Explore  />
                        <Favorite />
                        <Avatar className="headerRightAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"}/>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default Header;
