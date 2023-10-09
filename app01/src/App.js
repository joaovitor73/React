import React, {useState} from 'react'
import Relogio from './componentes/Relogio'
import Header from './componentes/Header'
import Body from './componentes/Body'
import Numero from './componentes/Numero'
import Led from './componentes/Led'
import './App.css'
export default function App(){
    const [num, setNum]=useState(10)
    const [ligado, setLigado] = useState(false)
    const cancelar = (obj) => obj.preventDefault();
    const [log, setLog] = useState(false)
    const msgLogin = () =>'úsuário logado'
    const msgLogof = () =>'Favor logar '
    const [cor, setColor] = useState(1)
    const vermelho = {color:'#f00'}
    const verde = {color:'#0f0'}
    const azul = {color:'#00f'}
    const retornaCor = (c) => {
        if(c === 1)
            return vermelho
        else if(c === 2)
                return verde
            else 
                return azul
    }
    const mudaCor = () => {
        setColor(cor+1)
        if(cor > 2)
            setColor(1)
    }

    setInterval(mudaCor,1000)
    const cumprimento = () => {
        const hora =  new Date().getHours()
        if(hora >= 0 && hora < 13)
            return <p>Bom dia</p>
        else if(hora < 18)    
                return <p>Boa tarde</p>
            else 
                return <p>Boa noite</p>
    }
    
    return (
        <>
        <section className='container'>
            <h1 style={retornaCor(cor)}>CFB Cursos</h1>
            <button onClick={() => mudaCor()}>Muda Cor</button>
            {cumprimento()}
            <p>{log? msgLogin(): msgLogof()}</p>
            <button onClick={() => setLog(!log)}>{log?'logof':'login'}</button>
            <Led ligado={ligado} setLigado={setLigado}/>
            <p>Valor do State num em App: {num}</p>
            <Numero num={num} setNum={setNum}/>
            <Relogio/>
            <Header/>
            <Body/>
            <a 
                href='#' 
                target='_blank'
                onClick={(e) => cancelar(e)}
            >CFB Cursos
            </a>
        </section>  
        </>
)
}
      