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
                        <ul id="list-languages">
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

                        <ul id="qualidades">
                            <li>✨Proatividade: Sempre pronto para assumir a iniciativa e encontrar soluções.</li>
                            <li>✨Boa comunicação: Habilidade para se comunicar eficazmente, tanto verbalmente quanto por escrito.</li>
                            <li>✨Conhecimento técnico: Amplo conhecimento e habilidades técnicas na área de desenvolvimento.</li>
                            <li>✨Conhecimento de negócios: Compreensão sólida dos aspectos de negócios relacionados aos projetos de tecnologia.</li>
                            <li>✨Dinamismo: Capacidade de se adaptar rapidamente a novas situações e abraçar desafios.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 id="education-frase">Education</h1>
                <div id="education">
                    <div id="ceub-logo-div">
                        <img src="data:image/jpeg;base64,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+6q/eKh0WHhM6D0Wet3U+qmP4pvv7qr94p/FN9/dVfvFQ6J4TP2j0TW7qfVTH8U3391V+8ta7xu6qCKleq4dC90e6YWtZWr6tRtNglzyGtHc/or5cYDhNkGsu6j6lUiSGl+ncBmw9StT3U6ZHlz2GVk0Ofzx3K56itnF3DFKjSZdWz89u+BqZLSdiDzBiNdQVL2/C2GstKFxc1KjPFYwkgkjM5uaAAwkc16bpgaHZzjunhOkhc8RXy94Ntq1B1bD6xqZN2OMzAkjYFrugIWPhfhuyq2Rurl1Roa5wcWnQARGgaTzXn+SzTqzvG2U8F0wqjZ4lXpf9qrUZ2a4ge4GFvfxVff3VX7ymcUscGFGoaNxUdVDT4YOeC6NAZpj81Tlm3RUzp9QvHamYn0KmP4pvv7qr94p/FN9/dVfvFQ6LLwmftHovNbup9VMfxTff3VX7xT+Kr7+6q/eUOieEz9o9E1u6n1XomdSvKIs1iiIiLxERERERERERERERERERERERERERERWH/p+9oxChm6vA9Sx4H5x7VtcZ0WjFKnyjMKTixxLdyzI0S30II9hVXpVC1wc0kOaQQRuCNQQrvS49p1GNbeWjKzm7OGXXvDhp7Co1RrxU1tE4jv8luaWluk4zK+4vglsMNdc0KtwWAtyMqOhp84aTkjuSCtji7/2ay9KP/5OUZjfG5uLerbmgGNcW+Hld9BrS0wRGp8vKN1tWPHdFtvSoVLMVRSY1vmc0gloy5gCwx/utGisA0kEwZ+ULZqYSRO4Wf8A6RtdnuHf/HlaCeWaSR8J94Ujw7VoDC7h1VpfR8SqXNaYLm5hEGR25hV7GeO31KJo29FtuxwIdlIJg7gQAGz13WjY8TinYVLPwiS8u8+baSD9GO3Vevo1HkuIiSMdhMlBUa3E8ivmNXmFupEW1tWp1ZEOe8kAT5tPFdy7KuoimtYGiAT88qO4yUREWSxREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX/9k=" alt=""/>
                    </div>

                    <div id="ceub">
                        <h3>CED Pompilio Marques de Souza</h3>
                        <h5>Ensino médio</h5>
                        <h5>Janeiro 2016 - Dezembro 2022</h5>
                    </div>
                </div>

                <div id="education">
                    <div id="ceub-logo-div">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>

                    <div id="ceub">
                        <h3>Centro universitario de Brasilia</h3>
                        <h5>Analise e Desenvolvimento de Sistemas</h5>
                        <h5>Janeiro 2023 - atualmente</h5>
                    </div>
                </div>
                <div id="education">
                    <div id="ceub-logo-div">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR6Ii4tprJCDd_FQZWYtfTyBbivNO0bKIJMdxI5w5KFWp6Tm355xETytW2oq5P8Lx5i8&usqp=CAU" alt="" />
                    </div>

                    <div id="ceub">
                        <h3>Pró-Linguas</h3>
                        <h5>Ingles: Básico, Intermediario, avançado</h5>
                        <h5>Dezembro 2022</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;