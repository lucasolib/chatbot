import { useState } from 'react'
import './botInfo.css'

function BotInfo() {
  const [friends] = useState(['Maha Mourad', 'Lucas Batista']);
  const [botLikes] = useState('419K');

  return (
    <>
      <div className='infoDiv'>
        <img src='../public/torvi-icon.png' alt='Torvi Icon' className='icon'/>
        <div className='text'>
          <div className='titleBot'>
            <h1> Torvi </h1>
          </div>
          <div className='botInfos'>
            <h4>
              {botLikes} people like this including {friends[0]} and {friends.length - 1} Friends
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default BotInfo
