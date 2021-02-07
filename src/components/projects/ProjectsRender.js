import React, { useState } from 'react'
import { ProjectCardData } from './ProjectsCardData'
import { CardContainer, SlideContainer, AnimatedScrollLeft, AnimatedScrollRight } from './ProjectsElements'
import Projects from './Projects'
import { SectionWrapper } from '../ReusableElements'

const ProjectsRender = () => {

    const [activeId, setActiveId] = useState(4)
    const [slideVal, setSlidevalue] = useState(-900)
    const [slideTransition, setSlideTransition] = useState('300ms')
    const [btnClicked, setBtnClicked] = useState(false)
    const ResetEnd = () => {
        setSlideTransition('none')
        setActiveId(5)
        setSlidevalue(-1200)
        setTimeout(() => {
            setSlideTransition('300ms')
        }, 10)
    }

    const ResetStart = () => {
        setSlideTransition('none')
        setActiveId(2)
        setSlidevalue(-300)
        setTimeout(() => {
            setSlideTransition('300ms')
        }, 10)
    }

    const PreviousSlide = () => {
        if (btnClicked) return
        setBtnClicked(true)
        if (activeId <= 1) return;
        setSlidevalue(slideVal + 300)
        setActiveId(activeId - 1)

        setTimeout(() => {
            setBtnClicked(false)
        }, 250)

    }
    const NextSlide = () => {
        if (btnClicked) return
        setBtnClicked(true)
        if (activeId >= 6) return;
        setSlidevalue(slideVal - 300)
        setActiveId(activeId + 1)

        setTimeout(() => {
            setBtnClicked(false)
        }, 250)
    }

    const ResetPosition = () => {
        if (activeId === 1) {
            setSlideTransition('none')
            ResetEnd()
        }
        if (activeId === 6) {
            setSlideTransition('none')
            ResetStart()
        }

    }

    return (
        <>
            <SectionWrapper id="projects-wrapper">
                <SlideContainer>
                    <AnimatedScrollLeft left="10%" onClick={PreviousSlide}></AnimatedScrollLeft>
                    <CardContainer>
                        {ProjectCardData.map(function (item, i) {
                            return (
                                <Projects ResetPosition={ResetPosition} slideTransition={slideTransition} active={activeId === item.id} slideVal={slideVal} id={item.id} key={i} img={item.img} text={item.text} header={item.header} GitSvg={item.GitSvg} SurgeSvg={item.SurgeSvg} />
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
