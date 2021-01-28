import styled from 'styled-components'

export const AnimatedButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100% );
  z-index: 99;
  height: 60px;
  width: 200px;

  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 30px;
  border: 2px solid #fff;
  background: #C3073F;
  cursor: pointer;
  outline-style: none;
  
`

export const AnimatedSpan = styled.span.attrs(props => ({
  left: props.left,
  top: props.top,
  size: props.size,
  font: props.font
}))`
position: absolute;
/* width: 408px;
height: 117px; */
left:  ${props => props.left};
top:  ${props => props.top};
font-size:  ${props => props.size};
font-family: ${props => props.font};
font-style: normal;
font-weight: 600;
/* font-size: 90px; */
line-height: 117px;

color: #FFFFFF;
`
