import React from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Project from '../../components/Project';


export default function English() {
    return (
        <div>
            <Navbar page="/" text1="Projects" text2="Resume" text3="Português" />
            <Header subtitle="Web Developer" />
            <Project />
        </div>
    );
}