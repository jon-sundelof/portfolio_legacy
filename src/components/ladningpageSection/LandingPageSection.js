import React from 'react'
import { AnimatedButton, AnimatedSpan } from './LandingPageSectionElements'
import { SectionWrapper } from '../ReusableElements'


const LandingPageSection = () => {
    return (
        <>
            <SectionWrapper>
                <AnimatedSpan top={'225px'} left={'1259px'} size={'90px'}>Front End</AnimatedSpan>
                <AnimatedSpan top={'342px'} left={'1500px'} size={'70px'}>Developer</AnimatedSpan>
                <AnimatedSpan top={'467px'} left={'138px'} size={'70px'}>Hello!</AnimatedSpan>
                <AnimatedSpan top={'558px'} left={'138px'} size={'70px'}>I am</AnimatedSpan>
                <AnimatedSpan top={'641px'} left={'138px'} size={'70px'}>Jon Sundelöf</AnimatedSpan>
                <AnimatedButton>About Me</AnimatedButton>
            </SectionWrapper>
        </>
    )
}

export default LandingPageSection
