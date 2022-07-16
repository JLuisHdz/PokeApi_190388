import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation(['translate']);
  const [menuCollapse, setMenuCollapse] = useState(false)



  return (
    <>
      <div className="nav">
        <div className="leng">
        {/* <div className="log">
            <img src="../images/PokApi.png" alt=" " />
        </div> */}
              <a onClick={(e) => window.location.href = '/'}>{t("pokemons")}</a>
              <a onClick={(e) => window.location.href = '/matricula'} >{t("matricula")}</a>
              <div className="bt">
                <button onClick={(e) => i18n.changeLanguage('en')}>Español</button>
                <button onClick={(e) => i18n.changeLanguage('es')}>Ingles</button>
              </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
