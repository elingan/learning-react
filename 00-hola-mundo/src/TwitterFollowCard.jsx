import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard({ children, userName, name, formatUserName, followed }) {
  const [isFollowing, setIsFollowing] = useState(followed)

  const followText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  console.log('renderizado')

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt='avatar' />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-info-username'>{formatUserName(userName)}</span>
          <div>{children}</div>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleFollow}>
          {followText}
        </button>
      </aside>
    </article>
  )
}
