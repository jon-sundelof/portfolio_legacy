import React from 'react'
import { Nav, NavItemsContainer, List, NavItems, MobileIcon } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle, isOpen }) => {

  return (
    <>

      <Nav>
        <MobileIcon isOpen={isOpen} onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavItemsContainer>
          <List>
            <NavItems to="landing-section-wrapper" smooth={true} spy={true} duration={500} offset={-80} activeClass="active" >Home</NavItems>
            <NavItems to="about-wrapper" smooth={true} spy={true} duration={500} exact="true" offset={-80} >About</NavItems>
            <NavItems to="projects-wrapper" smooth={true} spy={true} duration={500} exact="true">Projects</NavItems>
            <NavItems to="repository-wrapper" smooth={true} spy={true} duration={500} exact="true" offset={50}>Repository</NavItems>
            <NavItems to="contact-wrapper" smooth={true} spy={true} duration={500} exact="true" offset={55}>Contact</NavItems>
          </List>
        </NavItemsContainer>
      </Nav>
    </>
  )
}

export default Navbar
