import React from 'react'

export default function SearchPokemon() {
    return (
        <div className='flex-column bd-highlight mt-3 mb-3'>
 
            <input className='inputText mr-3' type="text" name="searchInput"/>
            <br/>
            <button className='button' style={{marginLeft: '1rem', marginTop: '1rem'}}>Buscar</button>
        </div>
    )
}
