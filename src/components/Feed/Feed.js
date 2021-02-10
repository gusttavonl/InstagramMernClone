import { Avatar } from '@material-ui/core';
import React from 'react';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Chat from '@material-ui/icons/Chat';
import Telegram from '@material-ui/icons/Telegram';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            <div className="row">
                <div className="col-12">
                    <div className="feedPub">
                        <div className="feedPubHeader">
                            <Avatar className="headerRightAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                            <p>gustavonoronha0</p>
                            <MoreHoriz />
                        </div>
                        <div className="feedPubImg">
                            <img src={"https://i.pinimg.com/564x/93/0a/98/930a98558ac28313646e491b01ee1e8f.jpg"} />
                        </div>
                        <div className="feedPubFooter">
                            <div className="feedPubFooterLeft">
                                <FavoriteBorder />
                                <Chat />
                                <Telegram />
                            </div>
                            <div className="feedPubFooterRight">
                                <BookmarkBorder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Feed;
