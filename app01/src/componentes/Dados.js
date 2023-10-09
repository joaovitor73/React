import React from 'react'

export default function Dados(Props){
    const n1 = 10;
    const n2 = 5;
    return(
        <section>
            <p>Canal: {Props.canal()}</p>
            <p>Youtube: {Props.youtube}</p>
            <p>Curso: {Props.curso}</p>
            <p>{'A soma de '+ n1 + ' com '+ n2 + ' é ' + Props.somar(n1,n2)}</p>
        </section>
    )
}