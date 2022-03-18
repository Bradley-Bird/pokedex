import { useEffect, useState } from 'react';
import TypeDropdown from '../components/TypeDropdown';
import Input from '../components/Input';
import PokeCard from '../components/PokeCard/PokeCard';
import classNames from 'classnames';
import {
  fetchPokemon,
  fetchPokemonByName,
  fetchPokemonType,
  fetchSearchedPokemon,
  fetchSelectedPokemonType,
} from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState('All');
  const [searchBar, setSearchBar] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (selectType === 'All') {
        const data = await fetchPokemon();
        setPokedex(data);
      }
    };
    const fetchType = async () => {
      const data = await fetchPokemonType();
      setType(data);
    };
    fetchData();
    fetchType();
  }, [selectType]);

  useEffect(() => {
    const fetchDataType = async () => {
      const dataType = await fetchSelectedPokemonType(selectType);
      setPokedex(dataType);
    };
    const fetchDataName = async () => {
      const dataName = await fetchPokemonByName(searchBar);
      setPokedex(dataName);
    };
    const fetchData = async () => {
      const data = await fetchSearchedPokemon(searchBar, selectType);
      setPokedex(data);
    };
    if (selectType && searchBar) {
      fetchData();
    } else if (searchBar) {
      fetchDataName();
    } else {
      fetchDataType();
    }
  }, [selectType, searchBar]);

  return (
    <div>
      <Input {...{ searchBar }} callback={setSearchBar} />
      <TypeDropdown {...{ type }} callback={setSelectType} />
      {pokedex.map((pokemon) => (
        <PokeCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
