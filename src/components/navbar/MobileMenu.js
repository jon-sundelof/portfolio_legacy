import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './MobileMenuElements';


const Sidebar = ({ isOpen, toggle }) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="landing-section-wrapper" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about-wrapper" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects-wrapper" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="repository-wrapper" onClick={toggle}>
                        Repository
                    </SidebarLink>
                    <SidebarLink to="contact-wrapper" onClick={toggle}>
                        Cotact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

