import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
<div>
<center><h1>404 Page not found</h1></center>    
<center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default NotFound;