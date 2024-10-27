import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './AllBeersPage.module.css'

function AllBeersPage() {
  const [beers, setBeers] = useState([]);        // Estado para a lista de cervejas
  const [searchQuery, setSearchQuery] = useState('');  // Estado para a consulta de pesquisa
  const [loading, setLoading] = useState(true);   // Estado para o carregamento

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
        setBeers(response.data);
      } catch (error) {
        console.error('Erro ao buscar cervejas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, [searchQuery]); // Dispara a busca sempre que searchQuery muda

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Cervejas</h1>
      
      {/* Campo de pesquisa */}
      <div className={styles.input}>
      <input 
        type="text" 
        placeholder="Buscar por nome" 
        value={searchQuery} 
        onChange={handleInputChange}
      />
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (

        <ul className={styles.beersList}>

          {beers.map(beer => (
            <li key={beer._id} className={styles.beerItem}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name}  className={styles.beerImage}/>
                <h2 className={styles.name}>{beer.name}</h2>
              </Link>
              <p className={styles.beerTagline}>{beer.tagline}</p>
              <p className={styles.contributedBy}><strong>Contributed by:</strong> {beer.contributed_by}</p>
            </li>
          ))}

        </ul>
      )}
    </div>
  );
}

export default AllBeersPage;
