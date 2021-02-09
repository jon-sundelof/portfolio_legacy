import React, { Fragment, useState } from 'react'
import LandingPage from './components/landingpage/LandingPage'

import { createGlobalStyle, ThemeProvider } from 'styled-components'


const App = () => {
  const [colorState, setColorState] = useState(0);

  const SwitchColor = () => {
    if (colorState === 2) {
      setColorState(0)
    } else {
      setColorState(colorState + 1)
    }
  }


  const OriginalTheme = [
    {
      colorOne: '#EDC7B7;',
      colorTwo: '#EEE2DC;',
      colorThree: '#AC3B61;'
    },
    {
      colorOne: '#C3073F;',
      colorTwo: '#950740;',
      colorThree: '#AC3B61;'
    },
    {
      colorOne: '#3d6cb9',
      colorTwo: '#00d1ff',
      colorThree: '#3d6cb9'
    }
  ]

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
  }
  a, a:visited{
  color: inherit;
  text-decoration: none;
}


  :root {
    --primary-color: ${props => props.theme.colorOne};;
    --secondary-color: ${props => props.theme.colorTwo};
    --third-color: ${props => props.theme.colorThree};

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

  return (
    <>
      <Fragment>
        <ThemeProvider theme={OriginalTheme[colorState]}>
          <GlobalStyle />
          <LandingPage SwitchColor={SwitchColor} />
        </ThemeProvider>
      </Fragment>
    </>
  )
}

export default App
