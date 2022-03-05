import React from 'react';
import Bounce from 'react-reveal/Bounce';
import {Container, ImgProject} from './style';

import project1 from '../../assets/img/dev.finance.png';
import project2 from '../../assets/img/challenge.jpg';
import project3 from '../../assets/img/To-do.png';
import project4 from '../../assets/img/spiderman.png';
import project5 from '../../assets/img/chatbot.png';

export function Project() {
    return (
        <Container className="container-image">
            <Bounce effect="fadeInUp">
                <a href="https://elbertribeiro.github.io/dev.finance">
                    <ImgProject src={project1} alt="DevFinance" /></a>
                <a href="https://elbertribeiro.com/tutormatch/">
                    <ImgProject src={project2} alt="Challenge" /></a>
                <a href="https://github.com/ElbertRibeiro/todo-list-electronJS">
                    <ImgProject src={project3} alt="ToDo List" /></a>
                <a href="https://elbertribeiro.github.io/spiderman/">
                    <ImgProject src={project4} alt="Spiderman" /></a>
                <a href="https://elbertribeiro.com/chatbot/">
                    <ImgProject src={project5} alt="Chatbot" /></a>
                <a href="./">
                    <ImgProject src={project1} alt="" /></a>
            </Bounce >
        </Container>
    );
}


