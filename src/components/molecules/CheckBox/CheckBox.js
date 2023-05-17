import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CustomImage } from '../../atoms/CustomImage'
import DarkModeIcon from '../../../assets/icons/darkMode.png'
import LightModeIcon from '../../../assets/icons/lightMode.png'

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  right: 0px;
  width: 80px;
  height: 36px;
  border-radius: 18px;
  box-shadow: ${(props) => props.theme.$checkBoxShadow};
  background-color: ${(props) => props.theme.$defaultCompBackground};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 29px;
    height: 29px;
    background-color: #019688;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    transition: 0.2s;
    margin-top: 3px;
    margin-left: 5px;
  }
`
const StyledCheckBox = styled.input`
  height: 0px;
  width: 0px;
  &:checked + ${CheckBoxLabel} {
    background-color: ${(props) => props.theme.$secondaryCompBackground};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 29px;
      height: 29px;
      margin-left: 46px;
      transition: 0.2s;
    }
  }
`

const CheckBox = ({ isDark, setIsDark }) => {
  const icon = isDark ? LightModeIcon : DarkModeIcon

  return (
    <CheckBoxWrapper>
      <StyledCheckBox
        value={isDark}
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        id="checkbox"
        type="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox">
        <CustomImage $height={20} $width={20} icon={icon} floatingIcon />
      </CheckBoxLabel>
    </CheckBoxWrapper>
  )
}

CheckBox.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
}

export default CheckBox
