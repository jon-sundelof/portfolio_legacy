import styled, { css } from 'styled-components'

export const RepositoryWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   /*  justify-content: center; */
`

export const Text = styled.h1`
    color: var(--white);
    font-size: 3rem;
    z-index: 9999;
`

export const RepoCardsContainer = styled.div`
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1000px) {
        width: 95%;
  }
`

export const Card = styled.div`
    z-index: 999;
    width: 180px;
    height: 330px;
    margin-bottom: 15px;
    /* padding: 5px; */
    /* width: 265px;
    height: 450px; */
    perspective: 450px;
    @media screen and (max-width: 1000px) {
        width: 130px;
        height: 240px;
  }
    
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
    background-image: linear-gradient(to left top, var(--primary-color) 0%, var(--secondary-color) 220%);
    display: flex;
      align-items: center;
      justify-content: center;
      transition: 500ms ease-in-out;
 /*    :hover {
        transition: 500ms ease-in-out;
        margin: -15px -15px -15px -15px;
        width: 210px;
        height: 360px;
    } */
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
    background-color: var(--white);
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
        background-image: linear-gradient(to left top, var(--primary-color) 0%, var(--secondary-color) 130%);
    }
`
export const CardBody = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardText = styled.p`
 text-align: center;
 font-size: ${props => props.font};
 margin-bottom: 5px;
 margin-top: 5px;
/*  width: 160px; */
@media screen and (max-width: 1000px) {
    font-size: 10px;
    max-width: 125px;
  }

`

export const CardImg = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background-color: var(--white);
    border: 5px solid var(--white);
    @media screen and (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`
export const CardName = styled.h2.attrs(props => ({
    font: props.font,
    color: props.color,
}))`
/*  -webkit-transform: rotate(90deg); */
  /*   -webkit-transform-origin: left top; */
    text-align: center;
    font-size: ${props => props.font};
    color: ${props => props.color};
    margin: 0 auto;
    width: 100%;
`