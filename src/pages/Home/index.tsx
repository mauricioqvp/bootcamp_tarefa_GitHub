import React from 'react';
import Background from '../../Components/Background';
import Content from '../../Components/Content';
import Topbar from '../../Components/Topbar';
import './style.css';

const Home = () => (
    <>
        <Topbar />
        <Background />
        <Content />
    </>
);

export default Home;