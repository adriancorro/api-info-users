import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import fakeBookings from "./data/fakeBookings.json";

const ShowInfo = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [BookingsFetcher, setBookingsFetcher] = useState([]);


  const Search2 = searchVal => {
    setSearchInput(searchVal.trim());
  };
  const urlFuntion1 = () => {
      // en esta API no estamos usando este URL
    return `https://cyf-react.glitch.me`;
  };

 useEffect(() => {
    fetch(urlFuntion1() )
      .then(res => {
        if (!res) {
          throw new Error(`HTTP error ! status : ${res.ok}`);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookingsFetcher(fakeBookings)
      })
      .catch(e => console.log(e));
    /*    con [] el efecto solo se ejecutará cuando el componente se monte, y no en cada rerenderizado
      con  [selectorProfile] Solo se vuelve a ejecutar si selectorProfile cambia 
      si no se coloca nada: se ejecuta después del primer renderizado y después de cada actualización
      */
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={Search2} />

        {/*    1)  Renderizando componenente a la primera carga y solo si searchInput esta en su estado como false
             por lo que al hacer !searchInput da true   */}
        {!searchInput && (
          <>
            <SearchResults results={BookingsFetcher} />
          </>
        )}

    
        {/*2) configuracion del filtro y renderizar solo cuando searchInput sea true (por defecto es false)*/}
       
       
        {searchInput && (
          <SearchResults
            results={BookingsFetcher.filter(  e =>    
              e.firstName.toLowerCase() === searchInput ||
              e.surname.toLowerCase() === searchInput ||
              e.firstName.charAt(0).toUpperCase() + e.firstName.slice(1).toLowerCase() === searchInput ||
              e.surname.charAt(0).toUpperCase() + e.surname.slice(1).toLowerCase() === searchInput ||
              e.id == searchInput ||
              e.email.toLowerCase() === searchInput ||
              e.email.charAt(0).toUpperCase() + e.email.slice(1).toLowerCase() ===  searchInput
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ShowInfo;
