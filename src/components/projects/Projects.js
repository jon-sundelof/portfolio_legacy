import React, { useRef } from 'react'
import { ContentConatiner, Card, Circle, CardImg, CardHeader, CardText, SvgsContainer, SvgIcon } from './ProjectsElements'

const Projects = ({ header, text, img, svg, svgTwo }) => {

    let xAxis;
    let yAxis;

    const OnMouseMove = (e) => {
        console.log(e)
        xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        yAxis = `${'rotateY(' + (window.innerWidth / 2 - e.pageY) + 'deg)'}`;
        console.log(xAxis)
    }

    return (
        <>
            <ContentConatiner xAxis={xAxis} yAxis={yAxis} onMouseMove={(e) => OnMouseMove(e)}>
                <Card>
                    <Circle><CardImg src={img} /></Circle>
                    <CardHeader>{header}</CardHeader>
                    <CardText>{text}</CardText>
                    <SvgsContainer>
                        <SvgIcon src={svg} />
                        <SvgIcon src={svgTwo} />
                    </SvgsContainer>
                </Card>
            </ContentConatiner>
        </>
    )
}

export default Projects
