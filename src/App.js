import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BuscadorProvider, BuscadorConsumer, Result } from './context/pokeContext';
import { useTranslation } from 'react-i18next';

export default () => <div>
  <BuscadorProvider>  
    <BuscadorConsumer/>
    <App/>
  </BuscadorProvider>
</div>

function App() {
  const [pokemon, setPokemon] = useState([]);   
  const [infoPok, setInfoPok] = useState([]);   
  const [array, setArray] = useState([]);
  const [prevUrl, setPrevUrl] = useState(0);
  const [nextUrl, setNextUrl] = useState(10); 
  const info = Result();
  const message = useRef(null);
  const { t } = useTranslation(['translate']);

  useEffect(() => {    
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`).then(data => {      
      setInfoPok(data.data.results);                             
    });        
  }, []);

  useEffect(() => {
    if(infoPok.length > 0){
      infoPok.slice(prevUrl, nextUrl).filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(info.search)){
          setArray([]);
          const url = elemento.url.split('/');
          axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(data => {
            setArray((current) => [...current, {data: data.data}]);            
          });
        }
      });    
    }
  }, [info]);

  useEffect(() => {
    pokeChange();
  }, [infoPok]);

  const pokeChange = () => {
    if(infoPok.length === 1126){
      var position = infoPok.slice(prevUrl, nextUrl);
      position.map(m => {
        const url = m.url.split('/');
        axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(poke => {   
          setArray((current) => [...current, {data: poke.data}]);          
        }).catch(function (e) {
          console.log(e.message);
        });
      });
    }
  }

  useEffect(() => {   
    setArray([]);     
    infoPok.slice(prevUrl, nextUrl).map(info => {
      const url = info.url.split('/');      
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(poke => {      
        setArray((current) => [...current, {data: poke.data}]);       
      }).catch(function (e) {
        console.log(e.message);
      });
      setPokemon(array);     
    });            
  }, [prevUrl]);

  return (
    <div className="App">
      <div className='AppPok'>
      {
         array.slice(0, 10).map((info, index) => (
          <div className='pokeCard' key={index}>
            <div title={info.data.name} placement="top">
              <img onClick={(e) => {window.location.href = `/pokemons/${info.data.id}`}} className='img' src={info.data.sprites.front_default} alt=" " ></img>                           
            </div>
          </div>
        ))
      }
        <div className="btn">
          <button onClick={(e) => { setPrevUrl(prevUrl - 10); setNextUrl(nextUrl - 10); }} className="previous">{t("previous")}</button>
          <button onClick={(e) => { setPrevUrl(prevUrl + 10); setNextUrl(nextUrl + 10); }} className="next">{t("next")}</button>
        </div>
      </div>
    </div>
  );
}