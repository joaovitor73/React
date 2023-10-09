import React from 'react'
import Dados from './Dados'
import '../App.css'
export default function Body(){
    const canal = () => 'CBF Cursos'
    const yt = 'youtube.com/cfbcursos'
    const somar = (v1,v2) => v1+v2;

    const textoDestaque = {
        color: '#00f',
        fontSize: '1em'
    }

    return(
        <section>
            <h2 style={{color: "#f00", fontSize: '2em'}}>Curso React</h2>
            <p style={textoDestaque}>Se inscreva no canal</p>
            <p classeName='texto'>Ative o sininho e clique no joinha</p>
            <Dados 
                canal= {canal}
                youtube={yt} 
                curso='Curso de React'
                somar={somar}
            />
        </section>
    )
}