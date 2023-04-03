import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diegodkid.png" alt="" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Santos</strong>
              <time title='01 de abril às 08:00' dateTime='2023-04-01 08:15:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Icone deletar'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom, parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}