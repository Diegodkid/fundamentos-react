import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import style from './App.module.css'
import './styles.css'

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Diego' 
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          />
          <Post 
            author='Rodinei' 
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          />
        </main>
      </div>
    </>
  )
}

export default App

