import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Busca from './pages/Busca';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/busca">
                <Busca />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;