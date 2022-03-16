import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokedex(data);
    };
    fetchData();
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
