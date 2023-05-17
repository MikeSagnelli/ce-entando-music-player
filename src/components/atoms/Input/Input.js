import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CustomImage } from '../CustomImage'
import {
  getHeightStyle,
  getWidthStyle,
  getFlexVerticalAlignmentStyle,
  getSpacedAlignmentStyle,
  getMarginStyle,
} from '../../../utils/styles'
import {
  getColorStyle,
  getFontSizeStyle,
  getFontVariantStyle,
  getLineHeightStyle,
  getTextAlignStyle,
} from '../../../utils/typography'

const StyledInput = styled.input`
  ${(props) => getFontVariantStyle(props)}
  ${(props) => getFontSizeStyle(props)}
  ${(props) => getLineHeightStyle(props)}
  ${(props) => getTextAlignStyle(props)}
  ${(props) => getColorStyle(props)}

  border: none;
  outline: none;
  background: none;
  width: 100%;
`

const Container = styled.div`
  ${(props) => getHeightStyle(props)}
  ${(props) => getWidthStyle(props)}
  ${(props) => getFlexVerticalAlignmentStyle(props)}
  ${(props) => getSpacedAlignmentStyle(props)}
  ${(props) => getMarginStyle(props)}


  display: flex;
  background-color: ${(props) => props.theme.$secondaryCompBackground};
  border-radius: 8px;
  padding: 12px 20px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.$inputBoxShadow};
`

const Input = ({ icon, text, setText, placeholder, ...props }) => (
  <Container {...props}>
    <StyledInput
      {...props}
      value={text}
      placeholder={placeholder}
      type="text"
      onChange={(e) => setText(e.target.value)}
    />
    {icon && <CustomImage $height={20} $width={20} icon={icon} />}
  </Container>
)

Input.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  setText: PropTypes.func,
}

export default Input
