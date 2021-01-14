import React from 'react'
import foto from '../not_foto.png'
import { Link } from 'react-router-dom'

export default function PokemonCard(props) {
    
    return (
        
        <Link to={`pokemon/${props.id}`} className='card' style={{width: '16rem', height: '22rem', margin: '5px'}}>
            {
                props.image ? (
                    <img src={props.image} className="card-img-top" alt="..."/>
                ):
                (
                    <img src={foto} className="card-img-top" alt="..."/>
                )
            }

            <div className='card-body'>
                <h5 className='card-title' style={{textTransform: 'capitalize'}}>{props.name}</h5>
                <div className="row">
                    {props.tipos.map(item =>{
                        return (
                            <div className="col-sm" key={item.type.name}>
                                <p style={{textTransform: 'capitalize'}}>{item.type.name}</p>
                            </div>
                        )
                    } )}
                </div>
            </div>
        </Link>
        
    )
}
