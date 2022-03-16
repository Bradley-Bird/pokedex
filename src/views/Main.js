import { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonType } from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokedex(data);
    };
    const fetchType = async () => {
      const data = await fetchPokemonType();
      console.log(data);
    };
    fetchData();
    fetchType();
  }, []);

  return (
    <div>
      {pokedex.map((pokemon) => (
        <div key={pokemon.id}>
          <span>{pokemon.pokemon}</span>
        </div>
      ))}
    </div>
  );
}
