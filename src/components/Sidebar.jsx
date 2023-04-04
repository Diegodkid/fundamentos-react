import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1679875984249-4ed7b7c79fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" 
      />      
      <div className={styles.profile}>
        <Avatar src='https://github.com/diegodkid.png'/>
        <strong>Diego Santos</strong>
        <span>Web Developer</span>
      
        <footer>
            <a href="#">
              <PencilLine size={20}/>
              Editar seu perfil
            </a>
        </footer>
      </div>
    </aside>
  )
}