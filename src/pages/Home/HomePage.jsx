import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../../assets/beers.png';
import randomBeerImage from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import './HomePage.css'

function HomePage() {

    return(

      <div className='homepage-container'>
      <h1>Bem Vindo ao Beer App !!!</h1>

      <div className='homepage-links'>

       <Link to="/beers" className='link'>
        <div className='link-box'>

        <img src={beersImage} alt="All beers"/>
        <h2>Todas as cervejas</h2>
        <p>Conheça todas as nossas cervejas disponíveis.</p>

        </div>
       </Link>
    
        <Link to="/random-beer" className='link'>
          <div className='link-box'>

            <img src={randomBeerImage} alt="Random Beer" />
            <h2>Cervejas Aleatórias</h2>
            <p>Veja uma cerveja aleatória da nossa seleção.</p>

          </div>  
        </Link>
      
        <Link to="/new-beer" className='link'>
          <div className='link-box'>

            <img src={newBeer} alt="New Beer" />
            <h2>Nova Cerveja</h2>
            <p>Adicione uma nova cerveja à nossa lista.</p>

          </div>  
        </Link>
      </div>
    </div>
    )
}

export default HomePage;
