export const VERTICAL_ALIGNMENTS = {
  alignTop: 'flex-start',
  alignMiddle: 'center',
  alignBottom: 'flex-end',
}

export const HORIZONTAL_ALIGNMENTS = {
  alignLeft: 'flex-start',
  alignCenter: 'center',
  alignRight: 'flex-end',
}

export const STRETCH_ALIGNMENTS = {
  stretch: 'stretch',
}

export const SPACED_ALIGNMENTS = {
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
}

/**
 * Returns the object value based on prop presence
 * @param {*} values
 * @param {*} props
 */
export const getPropValue = (props, values, defaultValue) => {
  const keys = Object.keys(props)
  const valuesKey = keys.find((key) => props[key] && values[key]) || defaultValue
  return values[valuesKey]
}

export function getWidthStyle({ width }) {
  if (width === undefined) return
  width = String(width).endsWith('%') ? width : `${String(width)}px`
  return `width: ${width};`
}

export function getHeightStyle({ height }) {
  if (height === undefined) return
  height = String(height).endsWith('%') ? height : `${String(height)}px`
  return `height: ${height};`
}

export function getSideStyle(props, style) {
  const propKeys = Object.keys(props).filter((prop) => prop.startsWith(style))

  return propKeys.reduce((styles, propKey) => {
    const side = propKey.toLowerCase().replace(style, '')
    const styleProp = side === '' ? `${style}` : `${style}-${side}`
    return `${styles}${styleProp}: ${String(props[propKey])}px;`
  }, '')
}

export function getPaddingStyle(props) {
  return getSideStyle(props, 'padding')
}

export function getMarginStyle(props) {
  return getSideStyle(props, 'margin')
}

export function getFlexDirection(props) {
  let direction = props.reverse ? 'column-reverse' : 'column'
  if (props.row) {
    direction = props.row && props.reverse ? 'row-reverse' : 'row'
  }
  return `flex-direction: ${direction};`
}

export function getFlexGrowStyle({ flexGrow }) {
  if (flexGrow === undefined) return
  return `flex-grow: ${flexGrow};`
}

export function getFlexWrapStyle({ wrap }) {
  return `flex-wrap: ${wrap ? 'wrap' : 'nowrap'};`
}

export function getFlexVerticalAlignmentStyle({ row, ...props }) {
  const alignment = getPropValue(props, VERTICAL_ALIGNMENTS)
  return alignment ? `${row ? 'align-items' : 'justify-content'}: ${alignment};` : ''
}

export function getFlexHorizontalAlignmentStyle({ row, ...props }) {
  const alignment = getPropValue(props, HORIZONTAL_ALIGNMENTS)
  return alignment ? `${row ? 'justify-content' : 'align-items'}: ${alignment};` : ''
}

export function getStretchAlignmentStyle(props) {
  const alignment = getPropValue(props, STRETCH_ALIGNMENTS)
  return alignment ? `align-items: ${alignment};` : ''
}

export function getSpacedAlignmentStyle(props) {
  const alignment = getPropValue(props, SPACED_ALIGNMENTS)
  return alignment ? `justify-content: ${alignment};` : ''
}
