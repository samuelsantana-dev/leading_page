import React from 'react'
import estilo from './principal.module.css'
/*
    *Tem que ligar o nome antes do module com o arquivo principal
 * Aqui vai ser o inicio ou seja os fundos do projeto
 */


function Home(){
    return(
        <div >
        <p className={estilo.secaoUm}>
            lorem oalafaef 
        </p>
        <button>
            Adicionar
        </button>
        </div>
    )
}
export default Home