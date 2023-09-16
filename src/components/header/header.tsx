import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Sidebar from './listSocial';
import { AiOutlineClose } from 'react-icons/ai';
interface Styles {
  width?: string;
  backgroundColor?: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
      setIsOpen(!isOpen);
  };

  let divStyle: Styles = {};

  if (isOpen) {
    divStyle = { width: '10rem', backgroundColor: 'red' };
  }

  return (
    <div>
      <header className="container-fluid row" id="container">
        <div id="logo" className="col-xxl-4 col-xl-3 col-lg-3 col-md-1 col-sm-1 col-1">
          <i id="logo-texto">Gustavo<br />Henrique</i>
        </div>

        <div id="navbar" className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-1">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/projetos"><li>Portfolio</li></a>
            <a href="/about"><li>About</li></a>
          </ul>
        </div>

        <div id="social" className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-1">
          <ul>
            <a href=""><li>Instagram</li></a>
            <a href=""><li>Twitter</li></a>
            <a href="https://www.linkedin.com/in/gustavo-henrique-b3a200263"><li>Linkedin</li></a>
            <a href="https://github.com/HenriqueCarniell" target="_blank" ><li>GitHub</li></a>
          </ul>
        </div>

        <div id="div-ham" className="col-sm-1" style={divStyle}>
    <button id="button-ham" onClick={handleToggle}>
    {isOpen ? <AiOutlineClose color="white" /> : <RiMenu3Line color="white"/>}
    </button>
  </div>
      </header>
      <Sidebar isOpen={ isOpen }/>
    </div>
  );
}

export default Header;
