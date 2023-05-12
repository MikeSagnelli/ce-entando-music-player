import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App.js', () => {
  it('should render hello world message', () => {
    render(<App />)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
