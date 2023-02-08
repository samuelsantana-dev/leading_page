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
                O Arena Jovem é mais do que um culto de jovens. É uma revolução que respira e exala o evangelho em cada uma de suas reuniões, não limitando-se às quatro paredes da igreja. O Arena é a chama que queima e acende o coração de todos que encontra no caminho.
	O movimento, que já tem feito a diferença na juventude brasileira (e de diversos outros países!) há exatos 20 anos, é fruto da oração incessável dos bispos da igreja Sara Nossa Terra por uma geração de jovens transformados e avivados. 
O evento, Arena Conference, tem caráter evangelístico e oferece a crianças, jovens e adultos a oportunidade de passar 3 dias profundamente imersos em verdadeiras experiências com Deus. Para acompanhar de perto os conteúdos exclusivos, as programações confirmadas e todas as novidades, acompanhe o instagram @arenaconference

                </span>


                <img src={shine} alt="Primeira imagem" className={Style.shine} />
            </div>


        </section>
    )
}
export default Section_dois