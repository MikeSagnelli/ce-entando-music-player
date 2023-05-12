import React, { useEffect, useState } from 'react'
import Sound from 'react-sound'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { DARK_THEME, LIGHT_THEME } from './utils/theme'
import { ComponentsProvider } from './components/ComponentsProvider'
import { getSoundInformation, searchSounds } from './api'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 141px 100px;
  }
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [audio, setAudio] = useState('')
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME

  const testFreesoundAPI = async () => {
    const response1 = await searchSounds('dogs')
    const response2 = await getSoundInformation(response1?.results?.[0]?.id)
    console.log({ response1, response2 })
    setAudio(response2.previews['preview-hq-mp3'])
  }

  useEffect(() => {
    testFreesoundAPI()
  }, [])

  console.log('TEMP: ', setIsDarkTheme)

  return (
    <ComponentsProvider theme={theme}>
      <GlobalStyle />
      <Sound url={audio} playStatus={Sound.status.PLAYING} />
      <div>
        <p>Hello World!</p>
      </div>
    </ComponentsProvider>
  )
}

export default App
