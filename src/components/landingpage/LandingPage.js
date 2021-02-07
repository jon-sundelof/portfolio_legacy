import React from 'react'
import Navbar from '../navbar/Navbar'
import LandingPageSection from '../ladningpageSection/LandingPageSection'
import About from '../about/About'
import ProjectsRender from '../projects/ProjectsRender'
import Repository from '../repository/Repository'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { PageWrapper } from './LandingPageElements'

const LandingPage = () => {
    return (
        <>
            <PageWrapper>
                <Navbar />
                <LandingPageSection />
                <About />
                <ProjectsRender />
                <Repository />
                <Contact />
                <Footer />
            </PageWrapper>
        </>
    )
}

export default LandingPage
