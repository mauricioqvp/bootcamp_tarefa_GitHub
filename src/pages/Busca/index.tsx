import React from 'react';
import Topbar from '../../Components/Topbar';
import './style.css';

const Busca = () => (
    <div>
        <Topbar />
        <h1 className="search-content">
            <div className="rectangle">
                <p className="search-content-block">
                    Encontre um perfil Github
                </p>
            </div>
        </h1>
    </div>
)

export default Busca;