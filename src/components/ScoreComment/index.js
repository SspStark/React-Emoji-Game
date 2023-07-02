import './index.css'

const ScoreComment = props => {
  const {score} = props
  let comment

  if (score < 5) {
    const commentText = (
      <p className="comment">
        Endhukura niku chadhuvu nikanna kukka baga score chesidhira simple game
        lo 5 kuda score cheyyalev, yekkadaina dhuki saavu.
      </p>
    )
    comment = commentText
  } else if (score < 8) {
    const commentText = (
      <p className="comment">
        Intha Yerripook gadivi endhi bro nuvvu 8 kuda score cheyyaleva,
        Adakkathinu ra poyi.
      </p>
    )
    comment = commentText
  } else if (score < 11) {
    const commentText = (
      <p className="comment">
        Abbo nuvvu manishive aithe, sare inkosari try chesuko.
      </p>
    )
    comment = commentText
  } else {
    const commentText = (
      <p className="comment">
        Aaahaaa Mawa mamulevvaram kadhuga, Aatagadive mari.
      </p>
    )
    comment = commentText
  }
  return comment
}

export default ScoreComment
