import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Spastic
            </Link>
            <div className="right menu">
            <Link to="/" className="item">
                All Streams, Bruh!
            </Link>
            </div>
        </div>
    )
}

export default Header;
