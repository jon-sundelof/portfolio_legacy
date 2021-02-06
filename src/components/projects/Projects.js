import React from 'react'
import { ContentConatiner, Card, Circle, CardImg, CardHeader, CardText, SvgsContainer, SvgIcon } from './ProjectsElements'

const Projects = ({ header, text, img, GitSvg, SurgeSvg, slideVal, id, active }) => {

    return (
        <>
            <ContentConatiner id={id}>
                <Card active={active} translate={slideVal}>
                    <CardImg src={img} />
                    <CardHeader>{header}</CardHeader>
                    <CardText>{text}</CardText>
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
