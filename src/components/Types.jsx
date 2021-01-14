import React from 'react'

export default function Types(props) {
    return (
        <>
            {props.types.map(item =>(
                <p 
                    className='fw-bold'  
                    key={item.type.name}
                    style={{textTransform: 'capitalize', margin: '1rem'}}
                >
                    {item.type.name}
                </p>
                )
            )}
        </>
    )
}
