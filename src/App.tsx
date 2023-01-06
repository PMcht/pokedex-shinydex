import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import PokemonCollection from "./components/PokemonCollection"
import { Pokemon, Poke } from "./interface"
import { Switcher } from "./components/Switch"
import { FormControl } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"


const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [dex, setDex] = useState("2");




//Fetch Pokemons
  useEffect(() => {
    setPokemons((p) => []);
    const getPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokedex/${dex}`
      )

      res.data.pokemon_entries.forEach(async (pokemon: Poke) => {
        try {
          const urlBase = pokemon.pokemon_species.url;
          const urlGood = (urlBase.slice(0,-1));
          const idNumber = urlGood.substring(urlGood.lastIndexOf("/") + 1);

           const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${idNumber}`
          )
            setPokemons((p) => [...p, poke.data])
          }
        catch (err) {
          console.log("An error occured while loading a pokemon")
          }
      })
    }
    getPokemon()
  }, [dex]);


  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header"> 
        <img id="logo" src={require('./game-logos/pokedex.png')} alt="Pokedex logo" />
          <div className="Filters-Container">
              <FormControl id="form">
                <InputLabel id="demo-simple-select-label">Game Version</InputLabel>
                <Select value={dex} label="Game Version" onChange={(e) => setDex(e.target.value)}>
                  <MenuItem className="item" value={2}><img src={require('./game-logos/rby.png')} alt="Red Blue Green" /></MenuItem>
                  <MenuItem className="item"value={3}><img src={require('./game-logos/gsc.png')} alt="Gold Silver Emerald" /></MenuItem>
                  <MenuItem className="item" value={4}><img src={require('./game-logos/rse.png')} alt="Ruby Sapphire" /></MenuItem>
                  <MenuItem className="item" value={5}><img src={require('./game-logos/dppt.png')} alt="Diamond Pearl Platinum" /></MenuItem>
                  <MenuItem className="item" value={9}><img src={require('./game-logos/b2w2.png')} alt="Black 2 White 2" /></MenuItem>
                  <MenuItem className="item" value={12}><img src={require('./game-logos/xy.png')} alt="X Y" /></MenuItem>
                  <MenuItem className="item" value={16}><img src={require('./game-logos/sm.png')} alt="Sun Moon" /></MenuItem>
                  <MenuItem className="item" value={27}><img src={require('./game-logos/swsh.png')} alt="Sword Shield" /></MenuItem>
                </Select>
              </FormControl>
            <Switcher />
          </div>
        </header>



          <PokemonCollection  pokemons={pokemons}/>
      </div>
    </div>
  )
}

export default App