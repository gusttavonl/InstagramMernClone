import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Chat from '@material-ui/icons/Chat';
import Telegram from '@material-ui/icons/Telegram';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import Delete from '@material-ui/icons/Delete';
import api from '../../services/api'
import Favorite from '@material-ui/icons/Favorite';
import './Feed.css';


function Feed() {
    const [publicacoes, setPublicacoes] = useState([])
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        async function loadPublicacoes() {
            const response = await api.get("publicacao")
            setPublicacoes(response.data)
        }

        loadPublicacoes();



    }, [])
    async function deletePublicacao(_id) {
        var response = await api.delete(`publicacao/${_id}`)
        alert("Excluido com sucesso")
        window.location.reload()
    }
    async function alterCurtidaSim(_id) {
        setLiked(true)
        const curtida = "S"
        const data = {
            _id,
            curtida
        }
        var response = await api.put('publicacao' + data)
    }

    async function alterCurtidaNao(_id) {
        setLiked(false)
        const curtida = "N"
        const data = {
            _id,
            curtida
        }
        var response = await api.put('publicacao' + data)
    }
    return (
        <div className="feed">
            <div className="row">
                <div className="col-12">
                    {publicacoes.map((publicacao) => (
                        <div className="feedPub">

                            <div className="feedPubHeader">
                                <Avatar className="headerRightAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                                <p>{publicacao.usuario}</p>
                                <Delete onClick={(e) => deletePublicacao(publicacao._id)} />
                            </div>
                            <div className="feedPubImg">
                                <img src={publicacao.imagem} />
                            </div>

                            <div className="feedPubFooter">
                                <div className="feedPubFooterLeft">
                                    {liked ? (
                                        <Favorite fontSize="large" onClick={(e) =>  alterCurtidaNao(publicacao._id)} />
                                    ) : (
                                        <FavoriteBorder fontSize="large" onClick={(e) => alterCurtidaSim(publicacao._id) } />
                                    )}
                                    <Chat />
                                    <Telegram />
                                </div>
                                <div className="feedPubFooterRight">
                                    <BookmarkBorder />
                                </div>


                            </div>
                            <div className="feedPubComents">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <h6 className="feedPubComentsUser">{publicacao.usuario}</h6>
                                            </div>
                                            <div className="col-9">
                                                <p className="feedPubComentsComent">{publicacao.comentario}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <EmojiEmotions />
                                    </div>
                                    <div className="col-9">
                                        <input className="feedPubComentsInput" placeholder="Escreva um Comentario" />
                                    </div>
                                    <div className="col-2">
                                        <button className="feedPubComentsButton">Publicar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Feed;
