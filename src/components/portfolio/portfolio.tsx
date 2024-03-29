import React from 'react';
import Header from '../header/header';

import { FaGithub } from "react-icons/fa";

import './portfolio.css';

let Main: React.FC = () => {
    return (
        <div id="portfolio">
            <Header />
            <div id="banner1">
                <div id="title-portfolio-div">
                    <h1 id="title-portfolio">Aqui estão todos os meus projetos</h1>
                </div>
                <div id="rocket-image-div">
                    <img src="https://media2.giphy.com/media/Aff0VppeMAyp9R2VX2/giphy.gif?cid=ecf05e470fqcms239drexsltw58win5hyreihw63tjkhq998&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                </div>
            </div>
            <div id="cards">
                <div className='card'>
                    <div className='div-titulo-projeto'>
                        <h1 className='titulo-projeto'>CRUD</h1>
                    </div>

                    <div className='descricao'>
                        <span>
                            "Esse projeto chamado Invest é uma aplicação web que permite aos usuários gerenciar listas de projetos. Utiliza operações CRUD para criar, ler, atualizar e deletar registros de forma eficiente e intuitiva.”
                        </span>
                    </div>

                    <div className='div-botao-projeto'>
                        <button className='botao-projeto'>
                            <a href="https://github.com/HenriqueCarniell/invest" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <FaGithub color='white' />
                            </a>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <div className='div-titulo-projeto'>
                        <h1 className='titulo-projeto'>CineInfo</h1>
                    </div>

                    <div className='descricao'>
                        <span className='span-descricao'>
                            “CineInfo é uma ferramenta interativa que permite aos usuários buscar informações detalhadas sobre filmes. Utiliza uma API de filmes para apresentar dados como gênero, popularidade, descrição de forma intuitiva e visualmente atraente.”
                        </span>

                        <h6>Pesquise o nome em Inglês</h6>
                    </div>

                    <div className='div-botao-projeto'>
                        <button className='botao-projeto'>
                            <a href="https://github.com/HenriqueCarniell/searchmovie" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <FaGithub color='white' />
                            </a>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <div className='div-titulo-projeto gerenciador'>
                        <h1 className='titulo-projeto fonte-menor'>Gerenciador de Contatos</h1>
                    </div>

                    <div className='descricao'>
                        <span className='span-descricao'>
                            cada usuário tem seus dados criptografados e enviados ao banco de dados junto com os seus contatos salvos em tabelas com chaves estrangeiras, 
                            garantindo uma organização eficaz. Basta fazer login no sistema e começar a gerenciar seus contatos de maneira simplificada!
                        </span>
                    </div>

                    <div className='div-botao-projeto'>
                        <button className='botao-projeto'>
                            <a href="https://github.com/HenriqueCarniell/contatos" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <FaGithub color='white' />
                            </a>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <div className='div-titulo-projeto'>
                        <h1 className='titulo-projeto'>Checa Clima</h1>
                    </div>

                    <div className='descricao'>
                        <span className='span-descricao'>
                        Verifique o clima atual de qualquer lugar do mundo instantaneamente com o WeatherCheck. Uma aplicação simples e eficiente, feita em TypeScript, API,
                        HTML e CSS, que fornece dados sobre as condições climáticas locais.
                        </span>

                        <h6>Pesquise o nome em Inglês</h6>
                    </div>

                    <div className='div-botao-projeto'>
                        <button className='botao-projeto'>
                            <a href="https://github.com/HenriqueCarniell/checktheweather" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <FaGithub color='white' />
                            </a>
                        </button>
                    </div>
                </div>
                <div className='card'>

                </div>
                <div className='card'>

                </div>
            </div>
        </div>
    );
}

export { Main };
