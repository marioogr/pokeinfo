import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function InfoPokemon(props) {
    
    const [pokemon, setpokemon] = useState(null)
    useEffect(() => {
        const getSpecsPokemon = async () => {
            const result = await axios(props.specie)
            setpokemon(result.data)
        }
        getSpecsPokemon()
    }, [])

    return (
        <div>
            <p>
                {}
            </p>
        </div>
    )
}
