import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Topbar = () => (
    <div>
        <Link to="/">
            <div className="main-bar">
                <p className="main-bar-content">Bootcamp DevSuperior</p>
            </div>
        </Link>
    </div>
)

export default Topbar;