import React from 'react'
import { ContentConatiner, Card, Circle, CardImg, CardHeader, CardText, SvgsContainer, SvgIcon } from './ProjectsElements'

const Projects = ({ header, text, img, GitSvg, SurgeSvg, slideVal, id, active, ResetPosition, slideTransition }) => {

    return (
        <>
            <ContentConatiner id={id}>
                <Card slideTransition={slideTransition} onTransitionEnd={ResetPosition} active={active} translate={slideVal}>
                    <CardImg slideTransition={slideTransition} active={active} src={img} />
                    <CardHeader slideTransition={slideTransition} active={active}>{header}</CardHeader>
                    <CardText slideTransition={slideTransition} active={active}>{text}</CardText>
                    <SvgsContainer>
                        <SvgIcon src={GitSvg} />
                        <SvgIcon src={SurgeSvg} />
                    </SvgsContainer>
                </Card>
            </ContentConatiner>
        </>
    )
}

export default Projects
