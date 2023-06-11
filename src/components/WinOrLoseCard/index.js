import './index.css'

const WinOrLoseCard = props => {
  const {ScoreDetails, playGameagain} = props
  const {score} = ScoreDetails
  const playagain = () => {
    playGameagain()
  }
  return (
    <div>
      <div>
        <h1>You {score < 12 ? 'Lose' : 'Won'}</h1>
        <p>{score < 12 ? 'Score' : 'Best Score'}</p>
        <p>{score}/12</p>
        <button type="button" onClick={playagain}>
          Play Again
        </button>
      </div>
      <img
        src={
          score < 12
            ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        }
        alt={score < 12 ? 'lose' : 'win'}
      />
    </div>
  )
}

export default WinOrLoseCard
