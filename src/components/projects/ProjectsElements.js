import styled from 'styled-components'


export const ContentConatiner = styled.div.attrs(props => ({
    xAxis: props.xAxis,
    yAxis: props.yAxis
}))`
    transform: rotate(${props => props.yAxis}deg);
    /* transform: rotateX(deg); */
   /*  transform: rotateX(-542.5deg); */
`
export const CardContainer = styled.div`
    height: 100%;
    z-index: 999;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 420px;
    width: 220px;
    z-index: 99;
    background: #ffffff;

    margin-bottom: 15px;
    padding: 20px;
    border-radius: 15px;
`
export const Circle = styled.div`
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 190px;
    background: linear-gradient(180deg, #C3073F 0%, #950740 100%);
    border-radius: 50%;
`
export const CardImg = styled.img`
    width: 200px;
    height: 100px;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #000;
`

export const CardHeader = styled.h2`
  /*   font-family: 'Roboto', sans-serif; */
    color: #950740;
    font-size: 24px;
    font-weight: 700;
`

export const CardText = styled.p`
    font-family: 'Roboto', sans-serif;
    z-index: 999;
    max-width: 240px;
    font-size: 14px;
    font-weight: 300;
`
export const SvgsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    z-index: 999;
`

export const SvgIcon = styled.img`
    z-index: 999;
    width: 50px;
    height: 50px;
    cursor: pointer;
`