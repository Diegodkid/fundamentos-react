import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import style from './App.module.css'
import './styles.css'

const posts = [
{
  id: 1, 
  author: {
    avatarUrl: 'https://github.com/diegodkid.png',
    name: 'Diego Santos',
    role: 'Web Developer'
  }, 
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: '👉 jane.design/doctorcare'}
  ],
  publishedAt: new Date('2023-04-03 08:00:00')
},
{
  id: 2, 
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @ Rockteseat'
  }, 
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: '👉 jane.design/doctorcare'}
  ],
  publishedAt: new Date('2023-04-03 09:30:00')
}
]

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App

