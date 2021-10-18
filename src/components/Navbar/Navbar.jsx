import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './Navbar.style';

const Navbar = ({ toggle,toggleHome }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
  },[])


  return (
    <>
      <IconContext.Provider value = {{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>dolla</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='about' smooth={true} spy={true} duration={500} exact='true' offset={-80}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='discover' smooth={true} spy={true} duration={500} exact='true' offset={-80}>Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='services' smooth={true} spy={true} duration={500} exact='true' offset={-80}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signup' smooth={true} spy={true} duration={500} exact='true' offset={-80} >Sign Up</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signIn'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
