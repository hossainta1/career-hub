import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>opps!! Error :400</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;