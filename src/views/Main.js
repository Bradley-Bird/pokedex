import { useEffect, useState } from 'react';
import TypeDropdown from '../components/TypeDropdown';
import Input from '../components/Input';
import PokeCard from '../components/PokeCard/PokeCard';

import {
  fetchPokemon,
  fetchPokemonByName,
  fetchPokemonType,
  fetchSearchedPokemon,
  fetchSelectedPokemonType,
  fetchSortPokemon,
} from '../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState('All');
  const [searchBar, setSearchBar] = useState('');
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState('asc');
  useEffect(() => {
    const fetchData = async () => {
      if (selectType === 'All') {
        const data = await fetchPokemon();
        setPokedex(data);
        setLoading(false);
      }
    };
    const fetchType = async () => {
      const data = await fetchPokemonType();
      setType(data);
      setLoading(false);
    };
    fetchData();
    fetchType();
  }, [selectType]);

  useEffect(() => {
    const fetchDataType = async () => {
      const dataType = await fetchSelectedPokemonType(selectType);
      setPokedex(dataType);
      setLoading(false);
    };
    const fetchDataName = async () => {
      const dataName = await fetchPokemonByName(searchBar);
      setPokedex(dataName);
      setLoading(false);
    };
    const sort = 'pokemon';
    const fetchData = async () => {
      const data = await fetchSearchedPokemon(searchBar, selectType, direction, sort);
      setPokedex(data);
      setLoading(false);
    };
    if ((selectType && searchBar) || (selectType && direction)) {
      fetchData();
    } else if (searchBar) {
      fetchDataName();
    } else {
      fetchDataType();
    }
  }, [selectType, searchBar, direction]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div onChange={(e) => setDirection(e.target.value)}>
        <input type="radio" value="asc" id="asc" name="sort" />
        <label>Ascending</label>
      </div>
      <div onChange={(e) => setDirection(e.target.value)}>
        <input type="radio" value="desc" name="sort" />
        <label>Descending</label>
      </div>
      <Input {...{ searchBar }} callback={setSearchBar} />
      <TypeDropdown {...{ type }} callback={setSelectType} />
      {pokedex.map((pokemon) => (
        <PokeCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
