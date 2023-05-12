import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const ComponentsProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

ComponentsProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default ComponentsProvider
