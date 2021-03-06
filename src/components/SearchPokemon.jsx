import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListPokemons from './ListPokemons'
import Loading from './Loading'


export default function SearchPokemon() {

    const [searchText, setsearchText] = useState('')
    const [allPokemons, setallPokemons] = useState([])
    const [listIdPokemons, setlistIdPokemons] = useState([145,2,146,25,5,6,70,8,90,10])
    const [noResults, setnoResults] = useState(true)
    const [errorSearch, seterrorSearch] = useState(false)
    const [loading, setloading] = useState(false)

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
        setlistIdPokemons([])
        if (searchText !== ''){
            setloading(true)
            let arr_filter = allPokemons.filter(poke => poke.name.includes(searchText.toLowerCase(), 0))
            arr_filter.forEach(element => {
                listId.push(parseInt(element.url.split('pokemon', 2)[1].replace("/", '').replace("/",'')))
            });
            setlistIdPokemons(listId)
            if (listIdPokemons.length === 0){
                setnoResults(false)
            }else {
                setnoResults(true)
            }
            setloading(false)
        }
        else{
            seterrorSearch(true)
        }
        
    }

  

    return (
        <>
            <h6>Busca aquí el Pokémon que quieras</h6>
            {loading?(<Loading></Loading>):null}

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
            {
                noResults ? (
                    <ListPokemons ids={listIdPokemons}></ListPokemons>
                ):(
                    <p style={{textAlign: 'center'}}>No hay resultados</p>
                )
            }
        </>
    )
}
