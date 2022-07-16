import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

function Pokemon(){    
    const { t, i18n } = useTranslation(['translate']);
    const location = window.location.pathname.split('/');
    const [pokemonInfo, setPokemonInfo] = useState([]);
    
    useEffect(() => {            
        axios.get(`https://pokeapi.co/api/v2/pokemon/${location[2]}`).then(data => {
            setPokemonInfo(data.data);         
            console.log(data.data);   
        });        
    }, []);    

    return(
        <div>
            <div className="detalles">
                <img className="imPok" src={pokemonInfo.sprites && pokemonInfo.sprites.front_default} width={200} height={200} />
                
                <div className="mov">
                <h1>{pokemonInfo && pokemonInfo.name}</h1>
                {
                    pokemonInfo.types && (
                        <div style={{color: 'white', height: '150px', overflowY: 'auto'}} className="tp">
                            <h4 >{t("movimientos")}:</h4>
                            <div>
                                {pokemonInfo.moves && pokemonInfo.moves.map((p, i) => (
                                    <li key={i}>{p.move.name}</li>
                                ))}
                            </div>
                        </div>
                    )
                }
                </div>
                <div className="borde">
                </div>
                <div className="abilities">
                    <h4>{t("habilidades")}:</h4>
                    <div>
                        {pokemonInfo.abilities && pokemonInfo.abilities.map((p, i) => (
                            <li key={i}>{p.ability.name}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default Pokemon;