import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className='pokedex'>
        {pokemons.map((pokemon, index) => (
          <Pokemon pokemons={pokemon} key={index} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
