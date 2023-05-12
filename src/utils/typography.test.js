import { FONT_VARIANTS } from './constants'
import { DARK_THEME, LIGHT_THEME } from './theme'
import {
  TEXT_ALIGN,
  getFontVariantStyle,
  getLineHeightStyle,
  getFontSizeStyle,
  getColorStyle,
  getTextAlignStyle,
} from './typography'

describe('typography helpers', () => {
  describe('getFontVariantStyle', () => {
    it('should generate the font variant styles', () => {
      Object.keys(FONT_VARIANTS).forEach((variant) => {
        const style = getFontVariantStyle({ [variant]: true })
        expect(style).toEqual(`font-family: ${FONT_VARIANTS[variant]}, sans-serif;`)
      })
    })
  })

  describe('getFontSizeStyle', () => {
    it('should generate the font size styles', () => {
      const style = getFontSizeStyle({ fontSize: 100 })
      expect(style).toEqual('font-size: 100px;')
    })
  })

  describe('getLineHeightStyle', () => {
    it('should generate line height styles', () => {
      const style = getLineHeightStyle({ lineHeight: 100 })
      expect(style).toEqual('line-height: 100px;')
    })
  })

  describe('getColorStyle', () => {
    it('should generate the font color styles', () => {
      const lightStyle = getColorStyle({ theme: LIGHT_THEME })
      const darkStyle = getColorStyle({ theme: DARK_THEME })
      expect(lightStyle).toEqual(`color: ${LIGHT_THEME.textColor};`)
      expect(darkStyle).toEqual(`color: ${DARK_THEME.textColor};`)
    })
  })

  describe('getTextAlignStyle', () => {
    it('should generate the font size styles', () => {
      Object.keys(TEXT_ALIGN).forEach((variant) => {
        const style = getTextAlignStyle({ [variant]: true })
        expect(style).toEqual(`text-align: ${TEXT_ALIGN[variant]};`)
      })
    })
  })
})
