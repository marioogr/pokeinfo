import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function IsLegendary(props) {

    const [legendary, setlegendary] = useState(false)
    useEffect(() => {
        const getLegendary = async () => {
            const result = await axios(props.specs)
            setlegendary(result.data.is_legendary)
        }
        getLegendary()
    }, [props.specs])
    return (
        <>
            {
                legendary?(
                    <p className='textColor' style={{fontWeight: 'bold'}}>Legendary</p>
                ):
                null
            }
        </>
    )
}
