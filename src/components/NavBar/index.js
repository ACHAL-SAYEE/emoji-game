import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {ScoreDetails, gameCompleteStatus} = this.props
    // console.log(ScoreDetails)
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1>Emoji Game</h1>
          </div>
          {gameCompleteStatus ? null : (
            <div className="scores">
              <p className="score">Score: {ScoreDetails.score}</p>
              <p className="score">Top Score: {ScoreDetails.topScore}</p>
            </div>
          )}
        </div>
      </nav>
    )
  }
}
export default NavBar
