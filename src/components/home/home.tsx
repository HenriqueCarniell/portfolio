import './home.css'
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';


function Home() {
    return (
        <div id="container-home">
            <div id="container-about">
                <div id="about1">
                    <div id="about-content">
                        <h1 id="title-home">Olá eu sou o Gustavo</h1>
                        <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt="Mão balançando" id="emoji" width="30px" />
                    </div>
                    <p id="paragraph">Um apaixonado Desenvolvedor Frontend 🚀 com experiência na construção de aplicações Web usando JavaScript, ReactJS, Node.js, Typescript e outras incríveis bibliotecas e frameworks.</p>
                    <div>

                    </div>
                </div>

                <div id="about2">
                    <img src="https://media0.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=ecf05e471afqatfwvnn0mw9ztozqj9w4e1gjnw8hdr0a9lwi&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="100%" height="500rem" alt="" />
                </div>
            </div>

            <div id="container2">
                <div id="div-image-ball">
                    <img src="https://media4.giphy.com/media/zgduo4kWRRDVK/giphy.gif?cid=ecf05e471afqatfwvnn0mw9ztozqj9w4e1gjnw8hdr0a9lwi&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" width="70%" />
                </div>
                <div id="div-about-languages">
                    <h1>O que eu sei ?</h1>
                    <p>Um programador muito entusiasmado que tem vontade de explorar todas as áreas da tecnologia.</p>
                    <div>
                        <ul>
                            <li className="language-skill">
                                <i><ImHtmlFive /></i>
                                <p>HTML</p>
                            </li>
                            <li className="language-skill">
                                <i><IoLogoCss3 /></i>
                                <p>CSS</p>
                            </li>                            
                            <li className="language-skill">
                                <i><BsFillBootstrapFill /></i>
                                <p>Bootstrap</p>
                            </li>                            
                            <li className="language-skill">
                                <i><BiLogoJavascript /></i>
                                <p>Javascript</p>
                            </li>                            
                            <li className="language-skill">
                                <i><BiLogoTypescript /></i>
                                <p>Typescript</p>
                            </li>                            
                            <li className="language-skill">
                                <i><BiLogoReact /></i>
                                <p>ReactJS</p>
                            </li>                            
                            <li className="language-skill">
                                <i><BiLogoNodejs /></i>
                                <p>NodeJS</p>
                            </li>
                            <li className="language-skill">
                                <i><GrMysql /></i>
                                <p>MySQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;