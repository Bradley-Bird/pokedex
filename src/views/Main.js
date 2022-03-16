import { useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Main</div>;
}
