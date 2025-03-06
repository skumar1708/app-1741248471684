import React, { useState, useEffect } from 'react';

function SnackBoard() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([5, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Logic to move the snake
    }, 300);
    return () => clearInterval(interval);
  }, [snake]);

  return (
    <div className="snack-board">
      {/* Render the board, snake, and food */}
    </div>
  );
}

export default SnackBoard;