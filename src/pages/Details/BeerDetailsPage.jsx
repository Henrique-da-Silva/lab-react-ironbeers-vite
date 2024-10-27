import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./BeerDetailsPage.module.css"

const BeerDetailsPage = () => {

  const { beerId } = useParams(); // Captura o beerId da URL
  const [beer, setBeer] = useState(null); // Estado para armazenar os detalhes da cerveja
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  useEffect(() => {
    // Função para buscar os detalhes da cerveja
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data); 
        setLoading(false); 
      } catch (err) {
        console.error(err);
        setError('Failed to fetch beer details.');
        setLoading(false); 
      }
    };

    fetchBeerDetails(); 
  }, [beerId]); // O useEffect depende do beerId, ou seja, é chamado sempre que o id muda

  
  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>{error}</div>;
  }

  
  if (!beer) {
    return null;
  }

  return (
    <div className={styles.beercontainer}>
      <img src={beer.image_url} alt={beer.name} className={styles.beerimg} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetailsPage;
