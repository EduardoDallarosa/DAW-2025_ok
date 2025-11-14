import { MovieContent } from "./cases/movies/components/movie-content"
import { MovieContextProvider } from "./cases/movies/context/movie-context"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { NavBar } from "./components/layout/navbar"

function App() {

  return (
    <>
      <Header />

      <main>

        <MovieContextProvider>
          <Highlight />
          <NavBar />
          <MovieContent />
        </MovieContextProvider>

      </main>

      <Footer />
    </>
  )
}

export default App
