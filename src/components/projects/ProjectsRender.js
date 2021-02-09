import React, { useState, useEffect } from 'react'
import { ProjectCardData } from './ProjectsCardData'
import { CardContainer, SlideContainer, AnimatedScrollLeft, AnimatedScrollRight, SectionHeader, ButtonWrapper, ProjectsWrapper, ProjectsOuterWrapper } from './ProjectsElements'
import Projects from './Projects'
import { ScrollBtnCon, ScrollText, AnimatedScroll } from '../about/AboutElements'

import { SectionWrapper } from '../ReusableElements'

const ProjectsRender = () => {

    const [activeId, setActiveId] = useState(4)
    const [slideVal, setSlidevalue] = useState(0)
    const [slideTransition, setSlideTransition] = useState('300ms')
    const [btnClicked, setBtnClicked] = useState(false)

    const updateDimensions = () => {
        if (window.innerWidth > 1000) {
            setActiveId(4)
            setSlidevalue(-750)
        } else {
            setSlidevalue(-1000)
        }
    }

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setSlidevalue(-1000)
        } else {
            setSlidevalue(-750)
        }
        window.addEventListener("resize", updateDimensions);
    }, [])

    const ResetEnd = () => {
        setSlideTransition('none')
        setActiveId(5)
        if (window.innerWidth < 1000) {
            setSlidevalue(-1250)
        } else {
            setSlidevalue(-1000)
        }
        setTimeout(() => {
            setSlideTransition('300ms')
        }, 10)
    }

    const ResetStart = () => {
        setSlideTransition('none')
        setActiveId(2)
        if (window.innerWidth < 1000) {
            setSlidevalue(-500)
        } else {
            setSlidevalue(-250)
        }
        setTimeout(() => {
            setSlideTransition('300ms')
        }, 10)
    }

    const PreviousSlide = () => {
        if (btnClicked) return
        setBtnClicked(true)
        if (activeId <= 1) return;
        setSlidevalue(slideVal + 250)
        setActiveId(activeId - 1)

        setTimeout(() => {
            setBtnClicked(false)
        }, 250)

    }
    const NextSlide = () => {
        if (btnClicked) return
        setBtnClicked(true)
        if (activeId >= 6) return;
        setSlidevalue(slideVal - 250)
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
            <SectionWrapper height="100vh" id="projects-wrapper">
                <ProjectsOuterWrapper>
                    <SectionHeader color="var(--secondary-color)">Projects</SectionHeader>
                    <ProjectsWrapper>
                        <SectionHeader color="var(--secondary-color)">Projects</SectionHeader>
                        <ButtonWrapper onClick={PreviousSlide}>
                            <AnimatedScrollLeft left="10%" />
                        </ButtonWrapper>
                        <SlideContainer>
                            <CardContainer>
                                {ProjectCardData.map(function (item, i) {
                                    return (
                                        <Projects ResetPosition={ResetPosition} slideTransition={slideTransition} active={activeId === item.id} slideVal={slideVal} id={item.id} key={i} img={item.img} text={item.text} header={item.header} GitSvg={item.GitSvg} SurgeSvg={item.SurgeSvg} />
                                    )
                                })
                                }
                            </CardContainer>
                        </SlideContainer>
                        <ButtonWrapper onClick={NextSlide}>
                            <AnimatedScrollRight left="85%"></AnimatedScrollRight>
                        </ButtonWrapper>
                    </ProjectsWrapper>
                </ProjectsOuterWrapper>
                <ScrollBtnCon to="repository-wrapper" smooth={true} spy={true} ><ScrollText>Repository</ScrollText><AnimatedScroll to="repository-wrapper" smooth={true} spy={true} /></ScrollBtnCon>
            </SectionWrapper>
        </>
    )
}

export default ProjectsRender
