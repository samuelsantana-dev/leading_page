import React from 'react'
import Style from './sectionDois.module.css'
import tv from '../../img/tv_img.png'
import arrow from '../../img/arrow.svg'
import arena from '../../img/arena_text.svg'
import shine from '../../img/shine.svg'
import Button from '../formulario/button'

function Section_dois() {
    return (
        <section className={Style.section}>

            <img src={tv} alt="Primeira imagem" className={Style.img} />

            <div className={Style.Divtext} >
                <div className={Style.titleimgs}>
                    <img src={arrow} alt="Primeira imagem" className={Style.arrow} />
                    <img src={arena} alt="Primeira imagem" className={Style.arena} />
                </div>

                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </span>

                <img src={shine} alt="Primeira imagem" className={Style.shine} />
            </div>


        </section>
    )
}
export default Section_dois