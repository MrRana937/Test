import React, { useState } from 'react'
import board from './data' // Import the default data (should be the 2D array)

const TicTac: React.FC = () => {
  // Type the state as a 2D array of strings
  const [data, setData] = useState<string[][]>(board)
  const [prevMove, setPrevMove] = useState<'X' | 'O'>('X') // "X" or "O"

  // Handle click function with proper typing
  const handleClick = (rowIndex: number, cellIndex: number): void => {
    // If the cell is already occupied, don't do anything
    if (data[rowIndex][cellIndex] !== '') return

    // Create a new copy of the data array
    const newData = data.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === cellIndex) {
          return prevMove // Set the current move ("X" or "O")
        }
        return cell // Keep other cells unchanged
      })
    )

    // Update the board state
    setData(newData)

    // Toggle the player for the next move
    setPrevMove(prevMove === 'X' ? 'O' : 'X')
  }

  return (
    <div className="board">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="cell"
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default TicTac
