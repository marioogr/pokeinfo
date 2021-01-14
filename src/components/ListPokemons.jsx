import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ShowPokemons from './ShowPokemons'

export default function ListPokemons(props) {
    const [pokemons, setpokemons] = useState(null)
    const [loanding, setloanding] = useState(false)

    useEffect(() => {
        const obtenerPokemons = async () => {
            let arr = []
            setloanding(false)
            for (let i = 0; i < props.ids.length; i++) {
                const url =  'https://pokeapi.co/api/v2/pokemon/'+ props.ids[i]
                const result = await axios(url)
                arr.push(result.data)
            }
            setpokemons(arr)
            setloanding(true)

        }
        
        obtenerPokemons()
        
    },[props.ids])

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {
                loanding ? (
                    <>
                        <ShowPokemons pokemons={pokemons}></ShowPokemons>

                    </>
                ):
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }
        </div>
    )
}
