import React from 'react'
import PokemonCard from './PokemonCard'

export default function ShowPokemons(props) {
    return (
        props.pokemons.map(item => (
            <PokemonCard
                name={item.name} 
                image={item.sprites.front_default} 
                id={item.id}
                key={item.id}
                url_specs={item.species.url}
                tipos = {item.types}
            >
            </PokemonCard>        
            )
        )
    )
}
