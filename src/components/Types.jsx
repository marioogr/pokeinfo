import React from 'react'

export default function Types(props) {
    return (
        <>
            {props.types.map(item =>{
                return (       
                    <p 
                        key={item.id}
                        className='fw-bold'  
                        style={{textTransform: 'capitalize', margin: '1rem'}}
                    >
                        {item.type.name}
                    </p>
                )
            } )}
        </>
    )
}
