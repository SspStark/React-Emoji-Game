import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar">
      <div className="title-score-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
