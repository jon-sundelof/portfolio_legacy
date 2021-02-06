import React, { useState } from 'react'
import { ProjectCardData } from './ProjectsCardData'
import { CardContainer, SlideContainer, AnimatedScrollLeft, AnimatedScrollRight } from './ProjectsElements'
import Projects from './Projects'
import { SectionWrapper } from '../ReusableElements'

const ProjectsRender = () => {

    const [activeId, setActiveId] = useState(4)
    const [slideVal, setSlidevalue] = useState(-900)


    const PreviousSlide = () => {
        if (activeId == 0) {
            setSlidevalue(-1500)
            setActiveId(6)
            return
        }

        setSlidevalue(slideVal + 300)
        setActiveId(activeId - 1)

    }
    const NextSlide = () => {
        if (activeId > 6) {
            setSlidevalue(0)
            setActiveId(1)
            return
        }
        setSlidevalue(slideVal - 300)
        setActiveId(activeId + 1)
    }

    return (
        <>
            <SectionWrapper id="projects-wrapper">
                <SlideContainer>
                    <AnimatedScrollLeft left="10%" onClick={PreviousSlide}></AnimatedScrollLeft>
                    <CardContainer>
                        {ProjectCardData.map(function (item, i) {
                            return (
                                <Projects active={activeId === item.id} slideVal={slideVal} id={item.id} key={i} img={item.img} text={item.text} header={item.header} GitSvg={item.GitSvg} SurgeSvg={item.SurgeSvg} />
                            )
                        })
                        }
                    </CardContainer>
                    <AnimatedScrollRight left="85%" onClick={NextSlide}></AnimatedScrollRight>
                </SlideContainer>
            </SectionWrapper>
        </>
    )
}

export default ProjectsRender
