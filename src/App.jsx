import { Routes, Route } from "react-router-dom";
import React from 'react';
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import AllBeersPage from './pages/All/AllBeersPage';
import RandomBeerPage from './pages/Random/RandomBeerPage';
import AddBeerPage from './pages/Add/AddBeerPage';
import BeerDetailsPage from './pages/Details/BeerDetailsPage';
import Navbar from "./components/Navbar";

function App() {
  return (
      <div>

      <Navbar/>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/random-beer" element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>

      </Routes>
      
      </div>
  );

}

export default App;
