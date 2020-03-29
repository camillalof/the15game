import React from 'react'
import PropTypes from "prop-types"

import '../index.css'

export const Cell = ({ index, number, onClick }) => (
  <button
    className={`cell${index + 1 === number ? ' cell-valid' : ''}${number === 0 ? ' cell-void' : ''}`}
    onClick={onClick}>
    {number}
  </button>
)

//Proptypes validates the props
Cell.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  onClick: PropTypes.func,
}

