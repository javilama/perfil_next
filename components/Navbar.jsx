"use client"


import { useRef } from 'react';
import Link from 'next/link';
import navbarStyles from './navbar.module.css';

const Navbar = () => {

  const menuRef = useRef(null);

  
  const toggleClass = () => {
    if (menuRef.current) {
      const activeClass = menuRef.current.className.includes(navbarStyles.active);
      if (activeClass) {
        menuRef.current.className = menuRef.current.className.replace(navbarStyles.active, ''); 
      } else {
        menuRef.current.className += ` ${navbarStyles.active}`;
      }
    }
  };
  
  
  return (
    <nav className={navbarStyles.navbar} >
    <ul ref={menuRef} >
        <li><Link href="/">Sobre mí</Link></li>
        <li><Link href="/intereses">Intereses</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
    </ul>
    <div className= {navbarStyles.hamburger}  onClick={toggleClass} >
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
  );
}

export default Navbar;
