import React from 'react';
import {Link} from 'react-router-dom';

const UnhandledError = () => {
    return (
        <div className="bounds">
            <h1>Error</h1>
            <p>Unexpected Error Has Occurred.</p>
            <Link className="button button-secondary" to="/"> Back To List
            </Link>
        </div>
    );
}
export default UnhandledError;