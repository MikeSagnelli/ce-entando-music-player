import {
  getPropValue,
  getSideStyle,
  getPaddingStyle,
  getHeightStyle,
  getWidthStyle,
  getMarginStyle,
  getFlexDirection,
  getFlexGrowStyle,
  getFlexWrapStyle,
  getFlexVerticalAlignmentStyle,
  getFlexHorizontalAlignmentStyle,
  getStretchAlignmentStyle,
  getSpacedAlignmentStyle,
  VERTICAL_ALIGNMENTS,
  HORIZONTAL_ALIGNMENTS,
  SPACED_ALIGNMENTS,
} from './styles'

describe('styles helpers', () => {
  describe('getPropValue', () => {
    it('should return the value based on the prop name', () => {
      const value = getPropValue({ lookupProp: true }, { lookupProp: 'value' })
      expect(value).toEqual('value')
    })

    it('should return the default value if no prop value found', () => {
      const value = getPropValue(
        { nonexistentProp: true },
        { lookupProp: 'value' },
        'lookupProp'
      )
      expect(value).toEqual('value')
    })
  })

  describe('getSideStyle', () => {
    it('should generate side styles', () => {
      let style

      style = getSideStyle({ $padding: 20 }, '$padding')
      expect(style).toEqual('padding: 20px;')

      style = getSideStyle({ $margin: 20 }, '$margin')
      expect(style).toEqual('margin: 20px;')

      style = getSideStyle({ $marginVertical: 20 }, '$margin')
      expect(style).toEqual('margin-vertical: 20px;')

      style = getSideStyle({ $marginHorizontal: 20 }, '$margin')
      expect(style).toEqual('margin-horizontal: 20px;')

      style = getSideStyle({ $marginRight: 20 }, '$margin')
      expect(style).toEqual('margin-right: 20px;')

      style = getSideStyle({ $marginLeft: 20 }, '$margin')
      expect(style).toEqual('margin-left: 20px;')

      style = getSideStyle({ $marginTop: 20 }, '$margin')
      expect(style).toEqual('margin-top: 20px;')

      style = getSideStyle({ $marginBottom: 20 }, '$margin')
      expect(style).toEqual('margin-bottom: 20px;')
    })
  })

  describe('getPaddingStyle', () => {
    it('should generate padding style', () => {
      const style = getPaddingStyle({ $padding: 20 })
      expect(style).toEqual('padding: 20px;')
    })
  })

  describe('getMarginStyle', () => {
    it('should generate margin style', () => {
      const style = getMarginStyle({ $margin: 20 })
      expect(style).toEqual('margin: 20px;')
    })
  })

  describe('getHeightStyle', () => {
    it('should generate height style', () => {
      let style = getHeightStyle({ $height: 20 })
      expect(style).toEqual('height: 20px;')

      style = getHeightStyle({ $height: '20%' })
      expect(style).toEqual('height: 20%;')
    })

    it('should handle no height', () => {
      const style = getHeightStyle({})
      expect(style).toBeUndefined()
    })
  })

  describe('getWidthStyle', () => {
    it('should generate width style', () => {
      let style = getWidthStyle({ $width: 20 })
      expect(style).toEqual('width: 20px;')

      style = getWidthStyle({ $width: '20%' })
      expect(style).toEqual('width: 20%;')
    })

    it('should handle no width', () => {
      const style = getWidthStyle({})
      expect(style).toBeUndefined()
    })
  })

  describe('getFlexDirection', () => {
    it('should generate flex-direction style', () => {
      let style = getFlexDirection({ $row: true })
      expect(style).toEqual('flex-direction: row;')

      style = getFlexDirection({ $row: true, $reverse: true })
      expect(style).toEqual('flex-direction: row-reverse;')

      style = getFlexDirection({ $column: true })
      expect(style).toEqual('flex-direction: column;')

      style = getFlexDirection({ $column: true, $reverse: true })
      expect(style).toEqual('flex-direction: column-reverse;')
    })
  })

  describe('getFlexGrowStyle', () => {
    it('should generate flex-grow style', () => {
      const style = getFlexGrowStyle({ $flexGrow: 1 })
      expect(style).toEqual('flex-grow: 1;')
    })

    it('should handle no flexGrow', () => {
      const style = getFlexGrowStyle({})
      expect(style).toBeUndefined()
    })
  })

  describe('getFlexWrapStyle', () => {
    it('should generate flex-grow style', () => {
      let style = getFlexWrapStyle({ $wrap: true })
      expect(style).toEqual('flex-wrap: wrap;')

      style = getFlexWrapStyle({})
      expect(style).toEqual('flex-wrap: nowrap;')
    })
  })

  describe('getFlexVerticalAlignmentStyle', () => {
    it('should generate vertical alignment style', () => {
      Object.keys(VERTICAL_ALIGNMENTS).forEach((variant) => {
        let style = getFlexVerticalAlignmentStyle({
          $column: true,
          [variant]: true,
        })
        expect(style).toEqual(`justify-content: ${VERTICAL_ALIGNMENTS[variant]};`)

        style = getFlexVerticalAlignmentStyle({
          $row: true,
          [variant]: true,
        })
        expect(style).toEqual(`align-items: ${VERTICAL_ALIGNMENTS[variant]};`)
      })
    })

    it('should generate empty vertical alignment style', () => {
      const style = getFlexVerticalAlignmentStyle({
        $column: true,
        nonExistentProp: true,
      })
      expect(style).toEqual('')
    })
  })

  describe('getFlexHorizontalAlignmentStyle', () => {
    it('should generate horizontal alignment style', () => {
      Object.keys(HORIZONTAL_ALIGNMENTS).forEach((variant) => {
        let style = getFlexHorizontalAlignmentStyle({
          $row: true,
          [variant]: true,
        })
        expect(style).toEqual(`justify-content: ${HORIZONTAL_ALIGNMENTS[variant]};`)

        style = getFlexHorizontalAlignmentStyle({
          $column: true,
          [variant]: true,
        })
        expect(style).toEqual(`align-items: ${HORIZONTAL_ALIGNMENTS[variant]};`)
      })
    })

    it('should generate empty horizontal alignment style', () => {
      const style = getFlexHorizontalAlignmentStyle({
        $column: true,
        nonExistentProp: true,
      })
      expect(style).toEqual('')
    })
  })

  describe('getStretchAlignmentStyle', () => {
    it('should generate stretch alignment style', () => {
      const style = getStretchAlignmentStyle({
        $stretch: true,
      })

      expect(style).toEqual('align-items: stretch;')
    })

    it('should generate empty stretch alignment style', () => {
      const style = getStretchAlignmentStyle({
        nonExistentProp: true,
      })

      expect(style).toEqual('')
    })
  })

  describe('getSpacedAlignmentStyle', () => {
    it('should generate spaced alignment style', () => {
      Object.keys(SPACED_ALIGNMENTS).forEach((variant) => {
        const style = getSpacedAlignmentStyle({
          [variant]: true,
        })

        expect(style).toEqual(`justify-content: ${SPACED_ALIGNMENTS[variant]};`)
      })
    })

    it('should generate empty spaced alignment style', () => {
      const style = getSpacedAlignmentStyle({
        nonExistentProp: true,
      })

      expect(style).toEqual('')
    })
  })
})
