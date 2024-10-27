import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./RandomBeerPage.module.css"

function RandomBeersPage() {

    const [beer, setBeer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect (() =>{

        async function fetchRandomBeer ( )  {

            try{

                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
                setBeer(response.data)
                setLoading(false)

            } catch (err){
                
                setError('Falha ao carregar a cerveja aleatória')
                setLoading(false)

            }
        }

        fetchRandomBeer()

    }, [])

    if (loading){
        return <p>Carregando..</p>
        
    }
    if (error){
        return <p>{error}</p>

    }
    if (!beer){
        return null
    }

    return(

       
        <div className={styles.container}>
        <img src={beer.image_url} alt={beer.name} className={styles.beerImage} />
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
        <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
        <p><strong>Description:</strong> {beer.description}</p>
        <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
      </div>
  

    )
}

export default RandomBeersPage;
