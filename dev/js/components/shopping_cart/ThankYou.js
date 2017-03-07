import React from 'react';
import {Link} from 'react-router';
export default () => {
    return (
      <div className="single_top">
                <div className="single_grid">
        <div className="alert alert-success">
            <strong>Success!</strong> Thank you for shopping 
        </div>
        <Link to="/" className="btn btn-success">Back to Home page</Link>
    </div>
    </div>
    );
}
