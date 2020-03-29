import React from 'react'
import PropTypes from 'prop-types'

import '../index.css'

export const Controls = ({ restart }) => (
  <div className="controls">
    <button onClick={restart}>Slumpa</button>
  </div>
)

//validates restart function
Controls.propTypes = {
  restart: PropTypes.func,
}