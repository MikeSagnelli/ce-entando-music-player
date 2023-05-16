import { FONT_VARIANTS } from './constants'
import { getPropValue } from './styles'

export const TEXT_ALIGN = {
  $right: 'right',
  $left: 'left',
  $center: 'center',
  $justify: 'justify',
}

export function getFontVariantStyle(props) {
  const fontFamily = getPropValue(props, FONT_VARIANTS, '$regular')
  return `font-family: ${fontFamily}, sans-serif;`
}

export function getFontSizeStyle({ $fontSize }) {
  return `font-size: ${$fontSize}px;`
}

export function getLineHeightStyle({ $lineHeight }) {
  return `line-height: ${$lineHeight}px;`
}

export function getColorStyle({ $textColor, theme }) {
  return `color: ${$textColor || theme.$textColor};`
}

export function getTextAlignStyle(props) {
  const textAlign = getPropValue(props, TEXT_ALIGN, '$left')
  return `text-align: ${textAlign};`
}
