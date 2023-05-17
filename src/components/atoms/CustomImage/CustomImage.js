import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getHeightStyle, getWidthStyle, getMarginStyle } from '../../../utils/styles'

const Icon = styled.img`
  ${(props) => getHeightStyle(props)}
  ${(props) => getWidthStyle(props)}
  ${(props) => getMarginStyle(props)}
`

const FloatingIcon = styled(Icon)`
  float: ${(props) => props.theme.$floatingIconSide};
  position: absolute;
  top: 7px;
  ${(props) => props.theme.$floatingHorizontalDistance}
`

const CustomImage = ({ icon, floatingIcon, ...props }) =>
  floatingIcon ? (
    <FloatingIcon src={icon} {...props} />
  ) : (
    <Icon src={icon} {...props} />
  )

CustomImage.propTypes = {
  $height: PropTypes.number,
  $width: PropTypes.number,
  icon: PropTypes.string,
  floatingIcon: PropTypes.bool,
}

export default CustomImage
