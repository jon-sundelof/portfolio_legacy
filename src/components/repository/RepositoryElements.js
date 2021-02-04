import styled, { css } from 'styled-components'

export const Text = styled.h1`
    color: #fff;
    font-size: 3rem;
    z-index: 9999;
`

export const RepoCardsContainer = styled.div`
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Card = styled.div`
    z-index: 999;
    width: 180px;
    height: 330px;
    /* width: 265px;
    height: 450px; */
    perspective: 450px;
    
`
export const CardInner = styled.div`
    z-index: 9999;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
   
    ${({ active }) =>
        active &&
        css`
      transform: rotateY(180deg);
      transition: transform 1s;
        transform-style: preserve-3d;
    `}

`

export const CardFaceFront = styled.div`
    z-index: 9999;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    background-image: linear-gradient(to bottom right, rgba(149, 7, 64, 1) 15%, rgba(193, 7, 64, 1) 115%);
    display: flex;
      align-items: center;
      justify-content: center;
      transition: 500ms ease-in-out;
    :hover {
        transition: 500ms ease-in-out;
        margin: -15px -15px -15px -15px;
        width: 210px;
        height: 360px;
    }
`
export const CardFaceBack = styled.div`
    z-index: 9999;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    background-color: #fff;
    transform: rotateY(180deg);
`
export const CardContent = styled.div`
    width: 100%;
    height: 100%;
`
export const CardHeader = styled.div`
    position: relative;
    padding: 10px 10px 10px;

    ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 0 0 50% 0;
        background-image: linear-gradient(to bottom left, rgba(149, 7, 64, 1) 10%, rgba(193, 7, 64, 1) 115%);
    }
`
export const CardBody = styled.div`

`
export const CardText = styled.p`
`

export const CardImg = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #fff;
`
export const CardName = styled.h2.attrs(props => ({
    font: props.font,
}))`
    text-align: center;
    font-size: ${props => props.font};
    color: #fff;
    width: 80%;
`