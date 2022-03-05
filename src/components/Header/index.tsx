import React from 'react';
import Bounce from 'react-reveal/Bounce';

import headshot from '../../assets/img/headshot.jpg';
import iconGithub from '../../assets/img/icon-github.png';
import iconInstagram from '../../assets/img/icon-instagram.png';
import iconLinkedin from '../../assets/img/icon-linkedin.png';

import iconWhatsapp from '../../assets/img/whatsapp-32.png';
import iconEmail from '../../assets/img/icon-email.png';

import {Button, Description, GroupIcon, Head, Headshot} from './style';

export function Header(props) {
    return (
        <Head className="header">
            <Headshot className="headshot" src={headshot} alt="Imagem Perfil" />
            <Bounce bottom>
                <Description className="description">
                    <h2>Elbert Ribeiro</h2>
                    <h4>{props.subtitle}</h4>
                </Description>
                <GroupIcon className="group-icon">
                    <a href="https://github.com/ElbertRibeiro">
                        <img src={iconGithub} alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/elbertnilton/">
                        <img src={iconInstagram} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/elbert-ribeiro/">
                        <img src={iconLinkedin} alt="Linkedin" />
                    </a>

                </GroupIcon>
            </Bounce>
            <Button className="button">
                <a href='mailto:elbertprofissional@gmail.com'>
                    <img src={iconEmail} alt="E-mail" />
                </a>
                <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5591981477039'>
                    <img src={iconWhatsapp} alt="WhatsApp" />
                </a>
            </Button>
        </Head>
    );
}


