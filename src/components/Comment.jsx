import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment () {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment () {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/maykbrito.png'/>

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Santos</strong>
              <time title='01 de abril às 08:00' dateTime='2023-04-01 08:15:00'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Icone deletar'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}