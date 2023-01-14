import React from 'react'
import Style from './sectionTres.module.css'
import Img from '../../img/20_anos_logo.png'
import Button from '../formulario/button'

function Section_tres(){
    return(
        <section className={Style.section}>
            
                <div  className={Style.Divtext} >
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                
                    <input type='submit' value='Inscreva-se'  className={Style.button} />
                </div>
                
                    <img src={Img} alt="Primeira imagem" className={Style.img} />
        </section>
    )
}

export default Section_tres