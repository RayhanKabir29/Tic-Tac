import { useState } from "react"
import PropTypes from 'prop-types';

function Square({value,handleClick}) {
  
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    onClick={handleClick}>
    {value}  
    </button>
  )
}
Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const handleClick = (i) => {
    if(squares[i]){
      return
    }
    const nextSquares = squares.slice()
    if(xIsNext){
      nextSquares[i] = 'X'
    }
    else{
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <>
     <div className="flex">
      <Square value={squares[0]}  handleClick={()=>handleClick(0)}/>
      <Square value={squares[1]}  handleClick={()=>handleClick(1)}/>
      <Square value={squares[2]}  handleClick={()=>handleClick(2)}/>
     </div>
     <div className="flex">
     <Square value={squares[3]}  handleClick={()=>handleClick(3)}/>
      <Square value={squares[4]}  handleClick={()=>handleClick(4)}/>
      <Square value={squares[5]}  handleClick={()=>handleClick(5)}/>
      
     </div>
     <div className="flex">
     <Square value={squares[6]}  handleClick={()=>handleClick(6)}/>
      <Square value={squares[7]}  handleClick={()=>handleClick(7)}/>
      <Square value={squares[8]}  handleClick={()=>handleClick(8)}/>
     </div>
    </>
  )
}


