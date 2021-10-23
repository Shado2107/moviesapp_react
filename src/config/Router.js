import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalogue from '../pages/Catalog';
import Details from '../pages/details/Details';

const Router = () => {
    return (
        <Switch>
            <Route 
                path='/:category/search/:keyword'
                component={Catalogue}
            />
            <Route 
                path='/:category/:id'
                component={Details}
            />
            <Route 
                path='/:category'
                component={Catalogue}
            />
            <Route 
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
};

export default Router;