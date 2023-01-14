import React from 'react'
import Style from './sectionUm.module.css'
import Img from '../../img/bg_bispos.svg'
import Button from '../formulario/button'

function sectionUm(){
    return(
        <section className={Style.section}>
                <img src={Img} alt="Primeira imagem" className={Style.img} />
                
                <div  className={Style.Divtext} >
                    
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>

                    <input type='submit' value='Inscreva-se'  className={Style.button} />
               
                </div>
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