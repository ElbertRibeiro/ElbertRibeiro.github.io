import React from 'react';

import {Link} from 'react-router-dom';
import {Droplink, Navegation, Navlist} from './style';

export function Navbar(props) {
    return (
        <Navegation className="nav-bar">
            <h2>Elbert Ribeiro</h2>
            <Navlist className="nav-list">
                <li><a className="nav-link" href="../../view/resume/">{props.text1}</a></li>
                <li><Link to="/resume" className="nav-link">{props.text2}</Link></li>
                <li><Link to={props.page} className="nav-link" href="../../view/resume/">{props.text3}</Link></li>
            </Navlist>
            <Droplink className="dropdown-link"><a id="dropdownLink" href="./">&#9776;</a></Droplink>
        </Navegation>
    );
}


