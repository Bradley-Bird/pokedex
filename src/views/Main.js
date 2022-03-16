import { useEffect, useState } from 'react';
import TypeDropdown from '../components/TypeDropdown';
import { fetchPokemon, fetchPokemonType, fetchSelectedPokemonType } from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokedex(data);
    };
    const fetchType = async () => {
      const data = await fetchPokemonType();
      setType(data);
    };
    fetchData();
    fetchType();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSelectedPokemonType(selectType);
      setPokedex(data);
    };
    fetchData();
  }, [selectType]);

  return (
    <div>
      <TypeDropdown {...{ type }} callback={setSelectType} />
      {pokedex.map((pokemon) => (
        <div key={pokemon.id}>
          <span>
            {pokemon.pokemon} ({pokemon.type_1}) ({pokemon.type_2})
          </span>
        </div>
      ))}
    </div>
  );
}
