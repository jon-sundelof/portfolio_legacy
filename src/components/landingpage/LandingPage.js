import React from 'react'
import Navbar from '../navbar/Navbar'
import LandingPageSection from '../ladningpageSection/LandingPageSection'
import About from '../about/About'
import ProjectsRender from '../projects/ProjectsRender'
import Repository from '../repository/Repository'
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
            </PageWrapper>
        </>
    )
}

export default LandingPage
