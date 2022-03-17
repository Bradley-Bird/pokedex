import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image }) {
  return (
    <div className="pokeCard">
      <div className="ImgBox">
        <img className="img" src={url_image} />
      </div>
      <div className="stats">
        <p>Name: {pokemon}</p>
        <p>Main Type: {type_1}</p>
        <p>Secondary Type: {type_2}</p>
      </div>
    </div>
  );
}
