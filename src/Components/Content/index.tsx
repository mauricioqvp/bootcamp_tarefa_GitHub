import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Content = () => (
    <div>
        <div className="title">
            Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior
        </div>
        <div className="welcome-text">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="link">antforfigma@gmail.com</a>
        <Link to="/busca">
            <button type="submit" className="btn-comecar">
                <span className="btn-comecar-text">
                    Começar
                </span>
            </button>
        </Link>
        </div>
    </div>
)

export default Content;