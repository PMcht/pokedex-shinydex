import * as React from 'react';


interface Props {
  name: string
  id: number
  image: string
  shiny: string
  type: string
}





function PokemonList(props: Props) {
  const { name, image, shiny } = props;

  const [isOpen, setOpen] = React.useState(false);
  const Check = () => {
    setOpen(!isOpen);
  }


  const [isOpen2, setOpen2] = React.useState(false);
  const Check2 = () => {
    setOpen2(!isOpen2);
  }



  return (
      <section className={`pokemon-list-container`} >
        <img className={`Normal ${!isOpen}`} onClick={Check} id="test" src={image} alt={name} />
        <img className={`Shiny ${!isOpen2}`} onClick={Check2} id="test" src={shiny} alt={name} />
      </section>
  )
}

export default PokemonList