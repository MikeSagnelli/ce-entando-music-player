import { FONT_VARIANTS } from './constants'

export const DARK_THEME = {
  backgroundColor: '#070715',
  textColor: 'rgba(255,255,255,0.9)',
  defaultCompBackground: '#1C1C24',
  secondaryCompBackground: '#2C2C38',
  checkBoxShadow: 'inset 0 0 4px 0 rgba(0,0,0,0.45)',
  backgroundGradient:
    'linear-gradient(180deg, rgba(7,7,21,0.85) 0%, rgba(7,7,21,0) 100%)',
  inputBoxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
  optionsBoxShadow: '0 2px 12px 0 rgba(0,0,0,0.3)',
  floatingIconSide: 'left',
  floatingHorizontalDistance: 'left: 10px;',
  fonts: FONT_VARIANTS,
}

export const LIGHT_THEME = {
  backgroundColor: '#F1F1F5',
  textColor: '#1C1C24',
  defaultCompBackground: '#FFFFFF',
  secondaryCompBackground: '#FFFFFF',
  checkBoxShadow: 'inset 0 0 4px 0 rgba(0,0,0,0.25)',
  backgroundGradient:
    'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(7,7,21,0) 100%)',
  inputBoxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
  optionsBoxShadow: '0 2px 12px 0 rgba(0,0,0,0.3)',
  floatingIconSide: 'right',
  floatingHorizontalDistance: 'right: 10px;',
  fonts: FONT_VARIANTS,
}
