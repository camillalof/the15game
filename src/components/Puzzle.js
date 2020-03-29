import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid } from './Grid'
import { Controls } from './Controls'
import { game } from './game'
import { Party } from './Party'

import '../index.css'

class Puzzle extends Component {
  static propTypes = {
    size: PropTypes.number //validates size as a number
  }
  //SETS AMOUNT OF TILES USED IN THE GAME
  static defaultProps = {
    size: 4
  }

  state = {
    grid: game.init({ size: this.props.size }),
    gameWon: false,
  }

  onCellClick = (index) => {
    const [grid, isWon] = game.swapCell(index)
    this.setState(() => ({ grid, gameWon: isWon }))
  }

  restart = (type) => { this.setState(() => ({ grid: game.reset(type), gameWon: false })) }

  render() {
    const { grid, gameWon } = this.state

    return (
      <> 
        { gameWon
          ? <div className="win"><Party/>Grattis!</div>
          : <Grid items={grid} onClick={this.onCellClick}/>
        }
        <Controls restart={this.restart}/>
      </>
    )
  }
}

export default Puzzle