import axios from 'axios'
import React, {useEffect, useState} from 'react'
import PokemonCard from './PokemonCard'

export default function ListPokemons() {

    const [pokemons, setpokemons] = useState(null)

    useEffect(() => {

        const obtenerPokemons = async () => {
            
            let arr = []
            for (let i = 50; i < 61; i++) {
                const url =  'https://pokeapi.co/api/v2/pokemon/'+ i
                const result = await axios(url)
                //const result2 = await axios(url_specs)
                //arr.push(Object.assign(result.data, result2.data))
                arr.push(result.data)
            }
            console.log(arr[0].types[0].type)
            setpokemons(arr)
        }
        if (pokemons === null){
            obtenerPokemons()
        }
    })

    

    const renderResults = () =>{
        if (pokemons !== null){
            return pokemons.map(item => { 
                return(
                    <PokemonCard 
                        name={item.name} 
                        image={item.sprites.front_default} 
                        key={item.name}
                        url_specs={item.species.url}
                        tipos = {item.types}
                    >
                    </PokemonCard>
                )
            })
        }
    }
    

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {
                pokemons ? (
                    renderResults()

                ):
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }
            
        </div>
    )
}
