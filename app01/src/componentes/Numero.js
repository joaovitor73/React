import React from 'react'

export default function Nummero(props){

    return(
        <>
            <p>Valor do State num em Numero: {props.num}</p>
            <button onClick={()  => props.setNum(props.num+10)}>Somar mais 10</button>
        </>
    )
}