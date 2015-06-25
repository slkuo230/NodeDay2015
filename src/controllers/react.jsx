'use strict';

import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import App from '../public/views/app.jsx';
import Index from '../public/views/index.jsx';
import Detail from '../public/views/detail.jsx';

let routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Index} />
        <Route path="/index" name="index" handler={Index} />
        <Route path="/detail" name="detail" handler={Detail} />
    </Route>
);

export default routes;