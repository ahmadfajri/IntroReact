import React from 'react'
import PropTypes from 'prop-types'

function Hello() {
  return <h1>Hello Fajri</h1>
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello;