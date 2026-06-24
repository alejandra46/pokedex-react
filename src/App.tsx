import Navbar from './components/Navbar'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pokemon/:name"
          element={<PokemonDetail />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App