import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Projetos from './pages/projetos';
import Contato from './pages/contato';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/sobre" component = {Sobre} />
            <Route path="/projetos" component = {Projetos} />
            <Route path="/contato" component = {Contato} />
        </Switch>
    </BrowserRouter>
)

export default Routes;