import { Header } from "./components/Header"
import { Post } from "./Post"


function App() {
  return (
    <div>
      <Header />
      <Post 
        author='Diego' 
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
      />
      <Post 
        author='Rodinei' 
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
      />
    </div>
  )
}

export default App

