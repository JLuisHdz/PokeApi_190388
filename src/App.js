import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?&limit=10")
  const [prevUrl, setPrevUrl] = useState()
  const [nextUrl, setNextUrl] = useState()

  return (
    <div className="App">
    </div>
  );
}



export default App;
