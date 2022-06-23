import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?&limit=10")
  const [prevUrl, setPrevUrl] = useState()
  const [nextUrl, setNextUrl] = useState()

  useEffect(() => {
    axios.get(currentUrl)
      .then(res => { 
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        setPokemon(res.data.results)
  })
    }, [currentUrl]);

  return (
    <div className="App">
      {pokemon.map(pokemon => 
        <PokemonList pokemon = {pokemon} />
        )}
      <div className="btn">
        <button onClick={Pagination} className="previous">PREVIOUS</button>
        <button onClick={Pagination} className="next">NEXT</button>
      </div>
    </div>
  );
}



export default App;
