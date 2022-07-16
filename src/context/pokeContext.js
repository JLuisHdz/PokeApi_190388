import React, { useContext } from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const pokeContext = React.createContext({
search: "",
setSearch: () => {}, 
});

export function BuscadorProvider(props) {
const [search, setSearch] = useState("Hola");
const result = React.useMemo(() => ({
    search, setSearch
}), [search]);

return (
    <pokeContext.Provider value={result} {...props} />
)
}

export function BuscadorConsumer(props) {
const { t} = useTranslation(['translate']);
const { search,  setSearch } = useContext(pokeContext);
return(  
    <div className="search" >
        <input placeholder={t("search")} type="text" className="imput" onChange={(e) => setSearch(e.target.value)}/>            
    </div>                
)
}

export function Result() {
const datos = useContext(pokeContext);
return datos;
}