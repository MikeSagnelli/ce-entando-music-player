import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getHeightStyle, getMarginStyle } from '../../../utils/styles'
import {
  getFontSizeStyle,
  getFontVariantStyle,
  getColorStyle,
  getLineHeightStyle,
  getTextAlignStyle,
} from '../../../utils/typography'

const Container = styled.div`
  ${(props) => getHeightStyle(props)}
  ${(props) => getMarginStyle(props)}
`

const StyledTitle = styled.p`
  ${(props) => getFontSizeStyle(props)}
  ${(props) => getFontVariantStyle(props)}
  ${(props) => getColorStyle(props)}
  ${(props) => getLineHeightStyle(props)}
  ${(props) => getTextAlignStyle(props)}
  ${(props) =>
    props.textTransform ? `text-transform: ${props.textTransform}` : ''};
  ${(props) => (props.opacity ? `opacity: ${props.opacity}` : '')};
  margin: 0;
`

const Title = ({ children, ...props }) => (
  <Container {...props}>
    <StyledTitle {...props}>{children}</StyledTitle>
  </Container>
)

Title.propTypes = {
  children: PropTypes.node,
}

export default Title
