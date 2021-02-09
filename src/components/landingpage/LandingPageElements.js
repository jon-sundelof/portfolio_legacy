import styled, { keyframes } from 'styled-components'
import Grainy from '../../img/grain-texture.jpg'



const grain = keyframes`
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
 `

export const PageWrapper = styled.div`
    z-index: -99;
    height: 554vh;
    /* background: #1A1A1D; */
    background: #000;

    
    :after {
  /* content is required when using :after */
/*   z-index: -99999; */
  content: "";
  top: -110%;
  left: -50%;
  pointer-events: none;
  animation: ${grain} 8s steps(10) infinite;
  /* The grainy image */
  background-image: url(${Grainy});
  /* Specify a height and width above and beyond the page header for movement */
  height: 300%;
  width: 300%;
  /* We're using opacity in place of a transparent image */
  opacity: 0.05;
  /* We'll need this when the animation kicks in to hold the position of the texture */
  position: fixed;
}` 