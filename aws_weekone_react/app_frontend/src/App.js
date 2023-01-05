import {useState, useEffect}  from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [pokemon, setPokemons] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/pokemons')
    .then(res =>{
      setPokemons(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      {
        pokemon.map(pokemons => (
          <div key={pokemons.id}>
            <h1>{pokemons.name}</h1>
            <p>{pokemons.type}</p>
            <p>{pokemons.type}</p>
            <img src={pokemons.image} alt={pokemons.name}></img>
          </div>
          
            ))
      }
    </div>
  );
}

export default App;
