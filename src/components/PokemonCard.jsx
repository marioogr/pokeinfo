import React from 'react'

export default function PokemonCard(props) {

    
    return (
        <div className='card' style={{width: '15rem', height: '22rem', margin: '5px'}}>
            <img src={props.image} className="card-img-top" alt="..."/>

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
        </div>
    )
}
