import { Col } from 'antd';
import { React, useState } from "react";
import Board from "../../components/board/index";
import "./index.css";


function Game(props)
{
  //const [turnName, setTurnName] = useState(props.turnName);
  const [state, setState] = useState({
    squares: initMatrix(props.size),
    lastMove: -1,
  });

  return (
    <Col className="game-area">
      <Board
        squares={state.squares}
        onClick={() => { }}
        size={props.size}
      />
    </Col>
  );

  function initMatrix(size)
  {
    var matrix = [];
    for (var i = 0; i < size; i++)
    {
      matrix[i] = [];
      for (var j = 0; j < size; j++)
      {
        matrix[i][j] = null;
      }
    }
    return matrix;
  }

}
export default Game;
