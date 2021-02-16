import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./src/pages/Home/Home"
import Publicacao from "./src/pages/Publicacao/Publicacao"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/publicacao" exact component={Publicacao} />
            </Switch>
        </BrowserRouter>
    )
}