import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onemojiclicked} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const emojiclicked = () => {
    onemojiclicked(id)
  }

  return (
    <li className="emoji">
      <button type="button" className="btn-emoji" onClick={emojiclicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
