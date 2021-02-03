import React from 'react'
import { ProjectCardData } from './ProjectsCardData'
import { CardContainer } from './ProjectsElements'
import Projects from './Projects'
import { SectionWrapper } from '../ReusableElements'

const ProjectsRender = () => {
    return (
        <>
            <SectionWrapper id="projects-wrapper">
                <CardContainer>
                    {ProjectCardData.map(function (item, i) {
                        return (
                            <Projects key={i} img={item.img} text={item.text} header={item.header} svg={item.svg} svgTwo={item.svgTwo} />
                        )
                    })

                    }
                </CardContainer>
            </SectionWrapper>
        </>
    )
}

export default ProjectsRender
