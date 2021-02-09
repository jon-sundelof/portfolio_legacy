import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

const NavComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log('hola')
    }
    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <MobileMenu isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default NavComponent
