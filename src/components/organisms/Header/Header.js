import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CustomImage } from '../../atoms/CustomImage'
import { CheckBox } from '../../molecules/CheckBox'
import { Title } from '../../atoms/Title'
import Logo from '../../../assets/icons/logo.png'
import {
  getWidthStyle,
  getSpacedAlignmentStyle,
  getMarginStyle,
  getFlexVerticalAlignmentStyle,
  getFlexDirection,
} from '../../../utils/styles'

const Container = styled.div`
  ${(props) => getWidthStyle(props)}
  ${(props) => getSpacedAlignmentStyle(props)}
  ${(props) => getFlexDirection(props)}
  ${(props) => getFlexVerticalAlignmentStyle(props)}
  ${(props) => getMarginStyle(props)}

  display: flex;
  height: fit-content;
`

const Header = ({ isDark, setIsDark }) => (
  <Container $width={'100%'} $marginBottom={28} $row $alignMiddle $spaceBetween>
    <Container $alignMiddle $row $spaceBetween>
      <CustomImage $height={58} $width={58} $marginRight={20} icon={Logo} />
      <Title $bold $fontSize={28} $height={23} $lineHeight={23}>
        Entando Sound Player
      </Title>
    </Container>
    <CheckBox $height={100} isDark={isDark} setIsDark={setIsDark} />
  </Container>
)

Header.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
}

export default Header
