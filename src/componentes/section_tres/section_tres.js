import React from 'react'
import Style from './sectionTres.module.css'
import Img from '../../img/ultimaFot.jpg'
import Button from '../formulario/button'

function Section_tres(){
    return(
        <section >
                <div  className={Style.Divtext} >
                    <p>
                        lorem  ispsum dolar sit amet,, sceodsinffee gegegeaigggfh goeçvnrgngroilorem ispsum dolar sit amet, sceodsinffee gegegeaiggn igoeçvnrgngroi
                    </p>
                    <br></br>
                    <input type='submit' value='Increva-se'  className={Style.button} />
                </div>
                
                    <img src={Img} alt="Primeira imagem" className={Style.img} />
        </section>
    )
}

export default Section_tres