import axios from "axios";
import { useEffect, useState } from "react"

function PokemonList({ pokemon }) {

    const [pokePic, setPokePic] = useState('');

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
            .then(res => {
                setPokePic(res.data.sprites.front_default)
            })
    },[pokemon])

    return(
        <div className="pokeCard">
            <div className="text">
            {pokemon.name}
            </div>
            <br />
            <div className="image">
            <img src={pokePic} />
            </div>
        </div>
    )
}

export default PokemonList