export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: {
    type : {
      name: string
    }
  }[]
}

export interface Poke{
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  }
}

