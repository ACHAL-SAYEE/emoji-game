/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const initialEmojiClickedStatus = []

for (let i = 0; i < 12; i += 1) {
  initialEmojiClickedStatus.push(false)
}

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    EmojiClickedStatus: initialEmojiClickedStatus.slice(),
    gameCompleteStatus: false,
  }

  onemojiclicked = id => {
    const {EmojiClickedStatus} = this.state
    const allemojisclicked = EmojiClickedStatus.every(
      clickedStatus => clickedStatus === true,
    )

    if (allemojisclicked) {
      this.setState({gameCompleteStatus: true})
    } else if (EmojiClickedStatus[id] === false) {
      const NewEmojiClickedStatus = EmojiClickedStatus
      NewEmojiClickedStatus[id] = true
      const allemojisclicked2 = EmojiClickedStatus.every(
        clickedStatus => clickedStatus === true,
      )
      if (allemojisclicked2) {
        this.setState({
          gameCompleteStatus: true,
          EmojiClickedStatus: NewEmojiClickedStatus,
          score: 12,
        })
      } else {
        this.setState(prevState => ({
          EmojiClickedStatus: NewEmojiClickedStatus,
          score: prevState.score + 1,
        }))
        this.shuffledEmojisList()
      }
    } else {
      this.setState({gameCompleteStatus: true})
    }
  }

  playGameagain = () => {
    const {score, topScore} = this.state
    if (score > topScore)
      this.setState({
        topScore: score,
        score: 0,
        EmojiClickedStatus: initialEmojiClickedStatus.slice(),
        gameCompleteStatus: false,
      })
    else {
      this.setState({
        score: 0,
        EmojiClickedStatus: initialEmojiClickedStatus.slice(),
        gameCompleteStatus: false,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, gameCompleteStatus, EmojiClickedStatus} = this.state
    const {emojisList} = this.props
    console.log('current', EmojiClickedStatus)
    console.log('initial', initialEmojiClickedStatus)
    return (
      <>
        <NavBar
          ScoreDetails={{score, topScore}}
          gameCompleteStatus={gameCompleteStatus}
        />
        {gameCompleteStatus ? (
          <WinOrLoseCard
            ScoreDetails={{score, topScore}}
            playGameagain={this.playGameagain}
          />
        ) : (
          <div className="emoji-game-container">
            <ul className="emojis-container">
              {emojisList.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emojiDetails={emoji}
                  onemojiclicked={this.onemojiclicked}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default EmojiGame
