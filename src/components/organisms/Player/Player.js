import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Sound from 'react-sound'
import styled from 'styled-components'
import {
  getWidthStyle,
  getSpacedAlignmentStyle,
  getMarginStyle,
  getFlexHorizontalAlignmentStyle,
  getFlexVerticalAlignmentStyle,
  getFlexDirection,
  getHeightStyle,
} from '../../../utils/styles'
import { Title } from '../../atoms/Title'
import { secondsToMMSS } from '../../../utils/timeFormat'

window.soundManager.setup({ debugMode: false })

const Container = styled.div`
  ${(props) => getWidthStyle(props)}
  ${(props) => getHeightStyle(props)}
  ${(props) => getSpacedAlignmentStyle(props)}
  ${(props) => getFlexDirection(props)}
  ${(props) => getFlexVerticalAlignmentStyle(props)}
  ${(props) => getFlexHorizontalAlignmentStyle(props)}
  ${(props) => getMarginStyle(props)}

  display: flex;
`

const Button = styled.button`
  ${(props) => getMarginStyle(props)}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

const PlayerContainer = styled(Container)`
  background-color: ${(props) => props.theme.$secondaryCompBackground};
  border-radius: 8px;
  padding: 12px 20px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.$inputBoxShadow};
  position: absolute;
  bottom: 40px;
  right: 100px;
`

const Player = ({ audio }) => {
  const [loop, setLoop] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const audioName = audio?.name
  const audioAuthor = audio?.username
  const audioUrl = audio?.previews?.['preview-hq-mp3']
  const audioDuration = audio?.duration

  return (
    <>
      <Sound
        url={audioUrl}
        playStatus={playing ? Sound.status.PLAYING : Sound.status.PAUSED}
        loop={loop}
        position={position}
        onPlaying={({ position }) => setPosition(position)}
        onFinishedPlaying={() => setPlaying(false)}
      />
      <PlayerContainer $width={400} $height={150} $alignCenter $alignMiddle $column>
        <Title $bold $fontSize={14}>
          {audioName}
        </Title>
        <Title $fontSize={12}>{audioAuthor}</Title>
        <Container $width="100%" $row $spaceBetween $marginTop={10}>
          <Title $fontSize={12}>{secondsToMMSS(0)}</Title>
          <Title $fontSize={12}>{secondsToMMSS(Math.floor(audioDuration))}</Title>
        </Container>
        <RangeInput
          type="range"
          min={0}
          max={Math.floor(audioDuration)}
          onChange={(e) => setPosition(e.target.value * 1000)}
          value={position / 1000}
          step={0.01}
        />
        <Container $width="100%" $row $spaceBetween>
          <Button onClick={() => setPlaying(!playing)}>
            <Title $bold $fontSize={14}>
              {playing ? 'Pause' : 'Play'}
            </Title>
          </Button>
          <Button onClick={() => setLoop(!loop)}>
            <Title $bold $fontSize={14}>
              {loop ? 'Play once' : 'Loop'}
            </Title>
          </Button>
        </Container>
      </PlayerContainer>
    </>
  )
}

const RangeInput = styled.input`
  & {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${(props) => props.theme.$rowBackgroundColor};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 20px;
    width: 7px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.$rowBackgroundColor};
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${(props) => props.theme.$rowBackgroundColor};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: ${(props) => props.theme.$rowBackgroundColor};
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: ${(props) => props.theme.$rowBackgroundColor};
  }
  &:focus::-ms-fill-upper {
    background: ${(props) => props.theme.$rowBackgroundColor};
  }
`

Player.propTypes = {
  audio: PropTypes.object,
}

export default Player
