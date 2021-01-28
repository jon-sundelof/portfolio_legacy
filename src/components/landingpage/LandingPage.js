import React from 'react'
import Navbar from '../navbar/Navbar'
import LandingPageSection from '../ladningpageSection/LandingPageSection'
import About from '../about/About'
import { PageWrapper } from './LandingPageElements'

const LandingPage = () => {
    return (
        <>
         <PageWrapper>
            <Navbar />
            <LandingPageSection />
            <About />
         </PageWrapper>
        </>
    )
}

export default LandingPage
