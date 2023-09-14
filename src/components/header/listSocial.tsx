import React from 'react';
import './listSocial.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div id="sidebarid" className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Sidebar;
