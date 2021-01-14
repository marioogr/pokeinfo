import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListPokemons from './ListPokemons'


export default function SearchPokemon() {

    const [searchText, setsearchText] = useState('')
    const [allPokemons, setallPokemons] = useState([])
    const [listIdPokemons, setlistIdPokemons] = useState([15,2,3,4,5,6,70,8,90,10])
    const [errorSearch, seterrorSearch] = useState(false)

    useEffect(() => {
        const getAllsPokemons = async () => { 
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=o')
            let arr = result.data.results
            setallPokemons(arr)
        }
        getAllsPokemons()
    },[])

    const formatError = () => {
        seterrorSearch(false)
    }

    const searchForName = () => {
        let listId = []
        if (searchText !== ''){
            let arr_filter = allPokemons.filter(poke => poke.name.includes(searchText.toLowerCase(), 0))
            arr_filter.forEach(element => {
                listId.push(parseInt(element.url.split('pokemon', 2)[1].replace("/", '').replace("/",'')))
            });
            setlistIdPokemons(listId)
            console.log(listIdPokemons)
        }
        else{
            seterrorSearch(true)
        }
        
    }

  

    return (
        <>
            <div className='flex-column bd-highlight mt-3 mb-3'>
                <input 
                    className='inputText mr-3' 
                    name="searchInput" 
                    onClick={formatError}
                    onChange={e => setsearchText(e.target.value)}
                    type="text" 

                />
                <br/>
                <button 
                    className='button' 
                    style={{marginLeft: '1rem', marginTop: '1rem'}}
                    onClick={searchForName}
                >
                    Buscar
                </button>
                {errorSearch ? (
                    <p>Debe incluir un criterio de busqueda</p>
                ):(
                    <></>
                )}
            </div>
            <ListPokemons ids={listIdPokemons}></ListPokemons>
        </>
    )
}
