import { useEffect, useState } from 'react';
import TypeDropdown from '../components/TypeDropdown';
import Input from '../components/Input';
import {
  fetchPokemon,
  fetchPokemonByName,
  fetchPokemonType,
  fetchSelectedPokemonType,
} from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState('');
  const [searchBar, setSearchBar] = useState('');
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonByName(searchBar);
      setPokedex(data);
    };
    fetchData();
  }, [searchBar]);

  return (
    <div>
      <Input {...{ searchBar }} callback={setSearchBar} />
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
