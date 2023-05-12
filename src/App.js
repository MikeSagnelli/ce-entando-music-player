import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { DARK_THEME, LIGHT_THEME } from './utils/theme'
import { ComponentsProvider } from './components/ComponentsProvider'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 141px 100px;
  }
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME

  console.log('TEMP: ', setIsDarkTheme)

  return (
    <ComponentsProvider theme={theme}>
      <GlobalStyle />
      <div>
        <p>Hello World!</p>
      </div>
    </ComponentsProvider>
  )
}

export default App
