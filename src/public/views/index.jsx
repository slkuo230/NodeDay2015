'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello From Index</h1>
                <Link to="detail">detail</Link>
            </div>
        );
    }
});