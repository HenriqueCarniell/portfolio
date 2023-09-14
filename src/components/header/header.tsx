import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Sidebar from './listSocial';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="container-fluid row" id="container">
        <div id="logo" className="col-xxl-4 col-xl-3 col-lg-3 col-md-1 col-sm-1 col-1">
          <i id="logo-texto">Gustavo<br />Henrique</i>
        </div>

        <div id="navbar" className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-1">
          <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>Portfolio</li></a>
            <a href=""><li>About</li></a>
          </ul>
        </div>

        <div id="social" className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-1">
          <ul>
            <a href=""><li>Instagram</li></a>
            <a href=""><li>Twitter</li></a>
            <a href=""><li>Linkedin</li></a>
            <a href=""><li>GitHub</li></a>
          </ul>
        </div>

        <div id="div-ham" className="col-sm-1" style={{ width: isOpen ? '10rem' : 'auto', backgroundColor: isOpen ? '#262524' : '#403F3D;' }}>
          <button id="button-ham" onClick={handleToggle}>
            <RiMenu3Line />
          </button>
        </div>
      </header>
      <Sidebar isOpen={ isOpen }/>
    </div>
  );
}

export default Header;
