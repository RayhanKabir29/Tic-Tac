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
  const winner = calculateWinner(squares)
  let status;
  if(winner){
    status = `Winner: ${winner}`
  }else{
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }
  const handleClick = (i) => {
    if(squares[i] || calculateWinner(squares)){
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
    <div className="flex flex-col items-center ">
    <div>{status}</div>
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
    </div>
  )
}


function calculateWinner (squares){
  const lines = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
}