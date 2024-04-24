import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import PokemonScreen from './pages/PokemonScreen';

function App() {
  console.log("App render")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokemon/:id" element={<PokemonScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
