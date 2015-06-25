'use strict';

import ReactRoutes from './react.jsx';
import {join} from 'path';

function reactRouterRoutesParser(routes, parentPath) {

    let result = [];

    routes = Array.isArray(routes) ? routes : [routes];
    routes.forEach(route => {
        const props = route._store.props;
        let path = props.path;
        if (path) {
            path = parentPath ? join(parentPath, path) : path;
            result.push(path);
        }

        if (props.children) {
            result = result.concat(reactRouterRoutesParser(props.children, path));
        }
    });

    return result;
}

export default function routes(router) {
    let expressRoutes = reactRouterRoutesParser(ReactRoutes);
    expressRoutes.forEach(path => {
        router.get(path, (req,res) => {
            res.render(req.url, {});
        })
    });
}