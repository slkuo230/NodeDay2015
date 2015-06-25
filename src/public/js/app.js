'use strict';

import React from 'react';
import Router from 'react-router';
import ReactRoutes from '../../controllers/react.jsx';
import Client from 'react-engine/lib/client';

// boot options
var options = {
    react: React,
    router: Router,
    routes: ReactRoutes,
    viewResolver: function(viewName) {
        return require('./views/' + viewName);
    }
};

(function bootLoader() {
    if (document.readyState === 'complete') {
        // remove all handlers that were set so that we dont keep
        // hitting boot loader for any future DOM `readyState` changes.
        document.onreadystatechange = null;
        Client.boot(options);
    }

    // if the readyState is not `complete`, attach self
    // or this function as the onreadystatechange handler.
    document.onreadystatechange = bootLoader;
})();