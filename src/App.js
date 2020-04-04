import React from 'react';
import './App.css';
import Routes from './router';


export default function App(){
    return(
        <div className="main">

            <header>

                <div className="flex-container">
                    
                    <div className="title-name">
                        Thiago Novaes
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/projetos">Projetos</a></li>
                            <li><a href="/contato">Contato</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                        </ul>
                    </div>
                </div>

            </header>

            <section>
                <Routes/>
            </section>

        </div>   
    )
}