'use strict';

import React from 'react';
import Router from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <script
                        type='text/javascript'
                        src='/js/bundle.js'
                        defer
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/css/app.css"
                    />
                </head>
                <body>
                    <Router.RouteHandler {...this.props} />
                </body>
            </html>
        );
    }
});