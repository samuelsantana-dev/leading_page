import React from 'react'
import Style from './sectionUm.module.css'
import Img from '../../img/segundaFoto.jpg'
import Button from '../formulario/button'

function sectionUm(){
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
/**
 *  <p>
                <Button className={Style.botao} />
            </p>

                    <div  className={Style.div} > 
                        </div>
 */
export default sectionUm