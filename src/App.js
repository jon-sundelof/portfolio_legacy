import React, { Fragment } from 'react'
import LandingPage from './components/landingpage/LandingPage'

import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
  }

  :root {
/*     --primary-color: #C3073F;
    --secondary-color: #950740; */
    --primary-color: #EDC7B7;
    --secondary-color: #EEE2DC;
    --third-color: #AC3B61;
 /*    --primary-color: #ff847c;
    --secondary-color: #feceab; */
   /*  --primary-color: #efbbcf;
    --secondary-color: #ffd5cd; */
    --white: #fff;
    --grey: #636363;
  }

&::-webkit-scrollbar-thumb {
  height: 10px;
  background-color: #353535;
  border-radius: 5px;
}

&::-webkit-scrollbar {
  width: 10px;
  background-color: #0f0f0f;
}
`


const App = () => {
  return (
    <>
      <Fragment>
        <GlobalStyle />
        <LandingPage />
      </Fragment>
    </>
  )
}

export default App
