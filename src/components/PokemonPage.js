import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [filterby, setFilterby] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
  }, [])

  function handleSearch(search){
    setFilterby(search)
  }

  const filteredPokemon = pokemons.filter((pokemon) => (pokemon.name.toLowerCase().includes(filterby.toLowerCase())))

  function handleAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search search = {filterby} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
