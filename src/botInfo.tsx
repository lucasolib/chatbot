import { useState } from 'react'
import './App.css'

function BotInfo() {
  const [friends] = useState(['Maha Mourad', 'Lucas Batista']);
  const [botLikes] = useState('419K');

  return (
    <>
      <h1>Optus</h1>
      <h4> {botLikes} people like this including {friends[0]} and {friends.length - 1} Friends</h4>
    </>
  )
}

export default BotInfo
