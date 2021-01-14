import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import foto from '../not_foto.png'
import IsLegendary from './IsLegendary'
import Loading from './Loading'
import Types from './Types'


export default function DetailPokemon(props) {

    const [pokemon, setpokemon] = useState(null)
    const {id} = useParams()
 
    useEffect(() => {
        const getInfoPokemon = async () => {
            const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setpokemon(result.data)
        }
        getInfoPokemon()
    }, [id])

    const renderCardPokemon = () => {
        return(
            <div className="d-flex justify-content-center">
                
                <div className='card' style={{width: '70rem', height: 'auto', margin: '5px'}}>
                {
                    pokemon.sprites.front_default ? (
                        <img 
                            src={pokemon.sprites.front_default} 
                            className="mx-auto d-block" 
                            alt={props.name} 
                            style={{height: '20rem', width: '20rem'}}
                        />
                    ):
                    (
                        <img 
                            src={foto} 
                            className="mx-auto d-block" 
                            alt="notfound"
                            style={{height: '20rem', width: '20rem'}}
                        />
                    )

                }
                    <div className='card-body'>
                        <h5 className='card-title' style={{textTransform: 'capitalize'}}>{pokemon.name}</h5>
                        <div className="d-flex justify-content-center">
                            <Types types={pokemon.types}></Types>
                        </div>
                        <p>Peso: {pokemon.weight}</p>
                        <p>Altura: {pokemon.height}</p>
                        <IsLegendary specs={pokemon.species.url}></IsLegendary>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
        {
            pokemon ? (
                <>
                    <Link
                        to='/'
                        className='tittle' 
                        style={{marginLeft: '1rem', marginTop: '1rem', fontSize: '20px'}}
                    >
                        Volver
                    </Link>
                    {renderCardPokemon()}
                </>
            ):
                <Loading></Loading>
        }
        </>
    )
}
