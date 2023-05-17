import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { DARK_THEME, LIGHT_THEME } from './utils/theme'
import { Header } from './components/organisms/Header'
import { SearchSound } from './components/organisms/SearchSound'
import { Player } from './components/organisms/Player'
import { ComponentsProvider } from './components/molecules/ComponentsProvider'
import { searchSounds } from './api'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${(props) => props.theme.$backgroundColor};
    padding: 141px 100px;
  }
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [audio, setAudio] = useState()
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME

  const fetchSounds = (searchText = '', page) => {
    return searchSounds(searchText, page)
  }

  return (
    <ComponentsProvider theme={theme}>
      <GlobalStyle />
      <Header isDark={isDarkTheme} setIsDark={setIsDarkTheme} />
      <SearchSound fetchSounds={fetchSounds} setAudio={setAudio} />
      {!!audio && <Player audio={audio} />}
    </ComponentsProvider>
  )
}

export default App
