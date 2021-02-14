import React, { useState } from 'react'
import { AnimatedButton, AnimatedSpan, SmallScreenHeader, SmallScreenWrapper } from './LandingPageSectionElements'
import { SectionWrapper } from '../ReusableElements'
import FrontEndSvg from '../svgs/FontEnd.js'



const LandingPageSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <SectionWrapper height="100vh" id="landing-section-wrapper">
                {/*   <AnimatedSpan top={'225px'} left={'1259px'} size={'90px'}>Front End</AnimatedSpan> */}
                {/*  <AnimatedSpan top={'342px'} left={'1500px'} size={'70px'}>Developer</AnimatedSpan> */}

                <AnimatedSpan top={'24%'} left={'62%'} size={'90px'}>Front End</AnimatedSpan>
                <AnimatedSpan top={'36.5%'} left={'74.5%'} size={'70px'}>Developer</AnimatedSpan>
                <AnimatedSpan top={'467px'} left={'138px'} size={'70px'}>Hello!</AnimatedSpan>
                <AnimatedSpan top={'558px'} left={'138px'} size={'70px'}>I am</AnimatedSpan>
                <AnimatedSpan top={'641px'} left={'138px'} size={'70px'}>Jon Sundelöf</AnimatedSpan>


                <SmallScreenWrapper>
                    <SmallScreenHeader>Hello!</SmallScreenHeader>
                    <SmallScreenHeader>I am Jon Sundelöf</SmallScreenHeader>
                    <SmallScreenHeader>Front End Developer</SmallScreenHeader>
                </SmallScreenWrapper>
                <AnimatedButton to="about-wrapper" smooth={true} spy={true} onMouseEnter={onHover} onMouseLeave={onHover}>About Me</AnimatedButton>
            </SectionWrapper>
        </>
    )
}

export default LandingPageSection
