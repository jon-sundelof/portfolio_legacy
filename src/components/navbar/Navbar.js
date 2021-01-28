import React from 'react'
import { Nav, NavItemsContainer, List, NavItems } from './NavbarElements'

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavItemsContainer>
                <List>
                    <NavItems>Home</NavItems>
                    <NavItems>About</NavItems>
                    <NavItems>Repository</NavItems>
                    <NavItems>Contact</NavItems>
                </List>
            </NavItemsContainer>
          </Nav>
        </>
    )
}

export default Navbar
