import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([1, 2])

  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' hh:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  const handleSubmit = () => {
    event.preventDefault()
    
    setComments([...comments, comments.length + 1])
  }
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        { publishedDateRelativeToNow }
      </time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph') {
          return <p>{line.content}</p>
        } else if (line.type === 'link') {
          return <p><a href='#'>{line.content}</a></p>
        }
      })}
      <p>
        <a href="#">#novoprojeto </a>
        <a href="#">#nlw </a>
        <a href="#">#rocketseat</a>
      </p>
    </div>

    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea placeholder='Deixe um comentário'/>

      <footer>
        <button type='submit'>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(coment => <Comment />)}
    </div>
   </article>
  )
}