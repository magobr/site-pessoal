import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/sobre" component = {Sobre} />
        </Switch>
    </BrowserRouter>
)

export default Routes;