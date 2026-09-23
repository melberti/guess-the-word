function GameOver({ won, reset }) {
  return (
    <>
      <h3>GAME OVER! YOU {won ? 'WON :)' : 'LOST :('}</h3>
      <div>
        <button onClick={reset}>Play Again</button>
      </div>
    </>
  );
}

export default GameOver;
