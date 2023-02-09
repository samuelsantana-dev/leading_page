import React from 'react'
import Style from './sectionUm.module.css'
import Img from '../../img/bg_bispos.svg'
import Button from '../formulario/button'

function sectionUm() {
    return (
        <section className={Style.section}>
            <img src={Img} alt="Primeira imagem" className={Style.img} />

            <div className={Style.Divtext} >

                <span>20 anos decidindo destinos | ARENA CONFERENCE 23
                    Um evento para celebrar os 20 anos impactando vidas, reescrevendo histórias e decidindo destinos. Isso é ARENA JOVEM.
                    Adquira já o seu ingresso e não perca a chance de ouvir palavras transformadoras, de viver dias inesquecíveis e de decidir de uma vez por todas O SEU DESTINO.
                </span>

                <input type='submit' value='Inscreva-se' className={Style.button} />

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