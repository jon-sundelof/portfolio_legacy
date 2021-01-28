import styled from 'styled-components'


export const ContentConatiner = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

export const TextContent = styled.p`
    font-family: 'Roboto', sans-serif;
    max-width: 740px;
    font-size: 29px;
    color: #fff;
`

export const AboutImg = styled.img`
    z-index: 999;
    width: 40%;
`

export const TextSpan = styled.span`
    position: absolute;
    z-index: 999;
    top: 109%;
    left: 10%;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: left top;
    
    padding: 10px;
    font-weight: 700;
    color: #C3073F;
    font-size: 34px;
         &:hover ${AboutImg} {
        color: black;
  }

`