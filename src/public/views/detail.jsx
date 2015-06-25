'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello From Detail</h1>
                <Link to="index">index</Link>
            </div>
        );
    }
});