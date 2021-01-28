import React from 'react'
import { TextContent, ContentConatiner, AboutImg, TextSpan } from './AboutElements'
import { SectionWrapper } from '../ReusableElements'

import Jon from '../../img/jon.jpg'



const About = () => {
    return (
        <>
            <SectionWrapper id="about-wrapper" >
                <ContentConatiner>

                    <AboutImg src={Jon} />
                    <TextSpan>React | JavaScript | Front-End</TextSpan>

                    <TextContent>As previosly said. I am Jon. I am a Future Front-End Developer who is currently studying at KYH in Stockholm. All my life i’ve had huge interesst for games, software and all kind of tech. These intressts are shared with a love for art and design in all shapes and forms. Therefore the career choice to become a Front-End Developer felt like the obvious decison. And that could not have been more right.</TextContent>
                </ContentConatiner>
            </SectionWrapper>
        </>
    )
}

export default About
