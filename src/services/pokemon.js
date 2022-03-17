export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}
export async function fetchPokemonType() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  const type = data.map((type) => type.type);
  return type;
}

export async function fetchSelectedPokemonType(type) {
  const params = new URLSearchParams();
  if (type !== 'All') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
export async function fetchPokemonByName(pokemon) {
  const params = new URLSearchParams();
  params.set('pokemon', pokemon);

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}

export async function fetchSearchedPokemon(pokemon, type) {
  const params = new URLSearchParams();
  params.set('pokemon', pokemon);
  if (type !== 'All') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
