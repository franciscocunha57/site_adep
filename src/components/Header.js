import React from 'react';

import logo1 from './logo-removebg-preview.png';

export class Header extends React.Component{

    render() {
        return (
            <nav class="navbar">
                <div class="container">
                    <img src={logo1} width="200" height="75" alt="Mountain"/>
                    <ul class="nav">
                        <li><a href="Home.js"> Home</a></li>
                        <li><a href="Informacoes.js"> Informações</a></li>
                        <li><a href="Percurso.js"> Percurso</a></li>
                        <li><a href="Noticias.js"> Notícias</a></li>
                        <li><a href="Socios.js"> Sócios</a></li>
                        <li><a href="Contactos.js"> Contactos</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}
