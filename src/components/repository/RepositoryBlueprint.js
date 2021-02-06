import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Text, Card, CardInner, CardFaceFront, CardFaceBack, CardBody, CardContent, CardHeader, CardImg, CardName, CardText } from './RepositoryElements'
import GitSvg from '../../img/github-icon.svg'

const RepositoryBlueprint = ({ id, url, language, name }) => {
    const [active, setActive] = useState(false)
    const [front, setFront] = useState(true)

    const FlipCard = () => {
        setActive(!active)
        setFront(!front)
        console.log(active)
        console.log(front)
    }

    return (
        <>
            <Card>
                <CardInner onClick={FlipCard} active={active}>
                    <CardFaceFront front={front}>
                        <CardName font="18px">{name}</CardName>
                    </CardFaceFront>
                    <CardFaceBack>
                        <CardContent>
                            <CardHeader>
                                <a href={url}><CardImg src={GitSvg} /></a>
                                <CardName font="16px">{name}</CardName>
                            </CardHeader>
                            <CardBody>
                                <CardText>{url}</CardText>
                                <CardText>{language}</CardText>
                            </CardBody>
                        </CardContent>
                    </CardFaceBack>
                </CardInner>
            </Card>
        </>
    )
}

export default RepositoryBlueprint
