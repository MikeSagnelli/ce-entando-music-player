import React from 'react'
import { render, screen } from '@testing-library/react'
import { ComponentsProvider } from './index'

describe('ComponentsProvider.js', () => {
  beforeEach(() => jest.resetModules())

  describe('should render with DARK_THEME', () => {
    it('should render', () => {
      const componentText = 'Hello World!'
      const component = <div>{componentText}</div>
      render(<ComponentsProvider theme={{}}>{component}</ComponentsProvider>)

      expect(screen.getByText(componentText)).toBeInTheDocument()
    })
  })
})
