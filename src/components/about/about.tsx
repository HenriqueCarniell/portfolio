import Header from "../header/header";
import './about.css'
function About() {
    return (
        <div>
            <Header />
            <div id="aboutMe">
                <h1>Olá meu nome é Gustavo</h1>
            </div>
            <div id="TituloDados">
                <h2>Dados pessoais</h2>
            </div>
            <div id="dados">
                <div>
                    <h4>E-mail:</h4>
                    <h5><a href="">gustavocarniel718@gmail.com</a></h5>
                </div>
                <div>
                    <h4>País de Nacionalidade:</h4>
                    <h5>Brasil</h5>
                </div>
                <div>
                    <h4>Telefone:</h4>
                    <h5>(61) 99179-5172</h5>
                </div>
                <div>
                    <h4>Endereço:</h4>
                    <h5>Modulo O, casa 376A, Estância Planaltina, Antiga barreira</h5>
                </div>
            </div>
            <div id="objetivos">
                <h2>Objetivos</h2>
                <h5>Programador</h5>
            </div>
            <div id="resumo">
                <h2>Resumo Profissional</h2>
                <h5>sihdgfkwudfjksdf</h5>
            </div>
            <div>
                <div>
                    <h2>Formação</h2>
                    <h5>Escolaridade:</h5>
                    <h6>Formação superior (cursando)</h6>
                    <h6>Ensino médio (completo)</h6>
                </div>
                <div>
                    <h5>Graduação</h5>
                    <h6>Análise e Desenvolvimento de Sistemas,<br/>UNICEUB-CENTRO UNIVERSITARIO DE BRASÍLIA<br/> (JULHO de 2025)- Cursando</h6>
                </div>
                <div>
                    <h5>Cursos Complementares</h5>
                    <h6>Inglês, Pró-Linguas</h6>
                    <h6>Rocketseat (básico)</h6>
                    <h6>Rocketseat (avançado)</h6>
                    <h6>Udemy (avançado)</h6>
                    <h6>Bradesco (básico)</h6>
                </div>
            </div>
        </div>
    );
}

export default About;