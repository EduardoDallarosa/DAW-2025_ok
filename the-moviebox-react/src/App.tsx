import { MovieContent } from "./cases/movies/components/movie-content"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { NavBar } from "./components/layout/navbar"

function App() {

  return (
    <>
      <Header/>
      <main>
        <NavBar/>
        <MovieContent/>
      </main>
      <Footer/>
    </>
  )
}

export default App
