import React from 'react';
import './sidebar.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineHome } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { GrTwitter } from 'react-icons/gr';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div id="sidebarid" className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
        <h1>Rotas</h1>
      </div>
      <ul id="list-sidebar">
        <a href="/"><i><AiOutlineHome color="white"/></i><li>Home</li></a>
        <a href="/projetos"><i><BiBookHeart color="white"/></i><li>Portfolio</li></a>
      </ul>
      <div>
        <h1>Social</h1>
        <ul id="list-sidebar">
        <a href="https://www.instagram.com/henrique_carniel_/" target='_blank'><i><AiFillInstagram color="white"/></i><li>Instagram</li></a>
        <a href="https://twitter.com/HenriqueCarnie7" target='_blank'><i><GrTwitter color="white"/></i><li>Twitter</li></a>
        <a href="https://github.com/HenriqueCarniell" target='_blank'><i><AiFillGithub color="white"/></i><li>Github</li></a>
        <a href="https://www.linkedin.com/in/gustavo-henrique-b3a200263/" target='_blank'><i><AiFillLinkedin color="white"/></i><li>Linkedin</li></a>
      </ul>
      </div>
    </div>
  );
}

export default Sidebar;
