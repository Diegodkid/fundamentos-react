import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bcana!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' hh:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  const handleNewCommentChange = () =>  {
    setNewCommentText(event.target.value)
  }

  const handleSubmit = () => {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
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
          return <p key={line.content}>{line.content}</p>
        } else if (line.type === 'link') {
          return <p key={line.content}><a href='#'>{line.content}</a></p>
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
      <textarea 
        onChange={handleNewCommentChange}
        value={newCommentText}
        name='comment'
        placeholder='Deixe um comentário'/>

      <footer>
        <button type='submit'>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(coment => <Comment key={coment} content={coment} />)}
    </div>
   </article>
  )
}