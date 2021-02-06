import React, { useState } from 'react'
import { ProjectCardData } from './ProjectsCardData'
import { CardContainer, SlideContainer, SlideBtn } from './ProjectsElements'
import Projects from './Projects'
import { SectionWrapper } from '../ReusableElements'

const ProjectsRender = () => {

    const [activeId, setActiveId] = useState(1)
    const [slideVal, setSlidevalue] = useState(0)


    const PreviousSlide = () => {
        if (activeId < 1) {
            return;
        }

        setSlidevalue(slideVal + 300)
        setActiveId(activeId - 1)
        console.log(SlideBtn.length)
    }
    const NextSlide = () => {
        if (activeId > 5) {
            return;
        }
        setSlidevalue(slideVal - 300)
        setActiveId(activeId + 1)
        console.log(slideVal)
    }

    return (
        <>
            <SectionWrapper id="projects-wrapper">
                <SlideBtn onClick={NextSlide}>INCREASE VALUE</SlideBtn>
                <SlideBtn onClick={PreviousSlide}>DECREASE VALUE</SlideBtn>
                <SlideContainer>
                    <CardContainer>
                        {ProjectCardData.map(function (item, i) {
                            return (
                                <Projects active={activeId === item.id} slideVal={slideVal} id={item.id} key={i} img={item.img} text={item.text} header={item.header} GitSvg={item.GitSvg} SurgeSvg={item.SurgeSvg} />
                            )
                        })
                        }
                    </CardContainer>
                </SlideContainer>
            </SectionWrapper>
        </>
    )
}

export default ProjectsRender
