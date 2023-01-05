import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {

    const getPokemons = async () => {
      const data = await fetch('/api/pokemons')
      const pokemonarr = await data.json()
      setPokemons(pokemonarr.pokemons)
    }
    getPokemons()
    }, [])

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <h2>Create a new Pokemon</h2>
      <form action='/api/pokemons' method='POST'>
        <label for='name'>Pokemon Name ☆ </label>
        <input type='text' name='name'/>

        <label for='level'>Pokemon Level ☆ </label>
        <input type='text' name='level'/>

        <label for='type'>Pokemon Type ☆ </label>
        <input type='text' name='type'/>
        
        <input type='submit' value='Submit'/>
      </form>
      {pokemons.map((pokemon) => (<div key={pokemon.id}>
        <h1>ID: {pokemon.id}</h1>
        <h1>Name: {pokemon.name}</h1>
        <h2>Type: {pokemon.type}</h2>
        <h2>Level: {pokemon.level}</h2>
      </div>
      ))}
    </div>
  )
}

export default App