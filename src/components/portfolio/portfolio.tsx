import React from 'react';
import Header from '../header/header';

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

                </div>
                <div className='card'>

                </div>
                <div className='card'>

                </div>
                <div className='card'>

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
