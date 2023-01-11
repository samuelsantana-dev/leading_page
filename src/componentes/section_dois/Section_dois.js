import React from 'react'
import Style from './sectionDois.module.css'
import Img from '../../img/repetirFotos.jpeg'
import Button from '../formulario/button'

function Section_dois(){
    return(
        <section >

            <img src={Img} alt="Primeira imagem" className={Style.img} />
                <div  className={Style.Divtext} >
                    <p >
                        lorem  ispsum dolar sit amet,, sceodsinffee gegegeaigggfh goeçvnrgngroilorem ispsum dolar sit amet, sceodsinffee gegegeaiggn igoeçvnrgngroi
                    </p>
                    <br></br>
                    <input type='submit' value='Increva-se'  className={Style.button} />
                </div>
                
                 
        </section>
    )
}
export default Section_dois