import React, { useState } from 'react';
import axios from 'axios';
import styles from "./AddBeerPage.module.css"

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'attenuation_level' ? Number(value) : value // Converte para número se for attenuation_level
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
      if (response.status === 200) {
        alert('Cerveja adicionada com sucesso!');
        setFormData({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: ''
        });
      }
    } catch (error) {
      console.error('Erro ao adicionar a cerveja:', error);
      alert('Ocorreu um erro ao adicionar a cerveja. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 style={{textAlign: 'center'}}>Adicionar Nova Cerveja</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={styles.input} />

        <label className={styles.label}>Slogan:</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleInputChange} className={styles.input} />

        <label className={styles.label}>Descrição:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} className={styles.textarea} />

        <label className={styles.label}>Primeira Cerveja:</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleInputChange} className={styles.input} />

        <label className={styles.label}>Dicas do Cervejeiro:</label>
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleInputChange} className={styles.input} />

        <label className={styles.label}>Nível de Atenuação:</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleInputChange} className={styles.input} />

        <label className={styles.label}>Contribuído por:</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleInputChange}className={styles.input} />

        <button type="submit" className={styles.button}>Adicionar cerveja</button>
      </form>
    </div>
  );
};

export default AddBeerPage;

