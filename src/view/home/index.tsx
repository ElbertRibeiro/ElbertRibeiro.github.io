import React from 'react';

import {Navbar} from '../../components/Navbar';
import {Header} from '../../components/Header';
import {Project} from '../../components/Project';

export function Home() {
    return (
        <div>
            <Navbar page="/english" text1="Projetos" text2="Currículo" text3="English"/>
            <Header subtitle="Desenvolvedor Web"/>
            <Project/>
        </div>
    );
}
