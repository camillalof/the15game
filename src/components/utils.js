
export const generateGrid = (size, type = 'default') => {
    let grid = [...Array(size ** 2).keys()] // Generates a bord based on the size choosen
  
    return grid.sort(() => Math.random() > 0.5 ? 1 : -1) // Randomizer for grid
  }
  
  // Creates rows and columns
  export const getCoords = (index, gridSize) => ({
    row: Math.floor(index / Math.sqrt(gridSize)),
    column: Math.floor(index % Math.sqrt(gridSize)), 
  })
  
  // Calculates empty cells and the columns/rows next to them
  export const isNextToEmptyCell = (index, emptyIndex, gridSize) => { 
    const cellCoords = getCoords(index, gridSize)
    const emptyCoords = getCoords(emptyIndex, gridSize)

    const sameRow = cellCoords.row === emptyCoords.row
    const adjacentRow = Math.abs(cellCoords.row - emptyCoords.row) === 1
    const sameColumn = cellCoords.column === emptyCoords.column
    const adjacentColumn = Math.abs(cellCoords.column - emptyCoords.column) === 1
  
    return (sameRow && adjacentColumn) || (sameColumn && adjacentRow)
  }
  
  // Calculates swap
  export const swap = (array, index, swapIndex) =>
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]]