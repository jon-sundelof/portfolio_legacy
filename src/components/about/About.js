import React from 'react'
import { TextContent, ContentConatiner, AboutImg, TextSpan, AnimatedScroll, ScrollBtnCon, ScrollText, FlexRow, BoldSpan } from './AboutElements'
import { SectionWrapper, ColorSpan } from '../ReusableElements'

import Jon from '../../img/nob-bw.png'



const About = () => {
    return (
        <>
            <SectionWrapper id="about-wrapper" >
                <ContentConatiner>
                    <FlexRow>
                        {/*    <TextSpan>React | JavaScript | Front-End</TextSpan> */}
                        <TextContent>As previosly said. I am <BoldSpan> Jon</BoldSpan>. I am a future Front-End <BoldSpan>Developer</BoldSpan> who is currently studying at KYH in Stockholm. All my life I’ve had huge <BoldSpan>interessts</BoldSpan> for games, <BoldSpan>software</BoldSpan> and all kind of tech. These <BoldSpan>intressts</BoldSpan> are shared with a fascination for <BoldSpan>art</BoldSpan> and <BoldSpan>design</BoldSpan> in all shapes and forms. Therefore the career choice to become a Front-End Developer felt like the obvious decison. <BoldSpan>Today</BoldSpan> I can't imagine a better alternative since i'm <BoldSpan>loving</BoldSpan> every <BoldSpan>second</BoldSpan><BoldSpan></BoldSpan><ColorSpan color="#C3073F">.</ColorSpan></TextContent>
                        {/*   <AboutImg src={Jon} /> */}
                    </FlexRow>
                    <ScrollBtnCon to="projects-wrapper" smooth={true} spy={true} ><ScrollText>Projects</ScrollText><AnimatedScroll to="projects-wrapper" smooth={true} spy={true} /></ScrollBtnCon>
                </ContentConatiner>
            </SectionWrapper>
        </>
    )
}

export default About
