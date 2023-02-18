import React from 'react'
import Style from './carousel.module.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Img_1 from '../../img/2010_por_amor.png'
import Img_2 from '../../img/2011_somos_um.png'
import Img_3 from '../../img/2012_visao_missao_destino.png'
import Img_4 from '../../img/2013_decidindo_destinos.png'
import Img_5 from '../../img/2014_mudando_o_mundo.png'
import Img_6 from '../../img/2015_paixao_e_devocao.png'
import Img_7 from '../../img/2016_povo_da_cruz.png'
import Img_8 from '../../img/2017_nada_a_temer.png'
import Img_9 from '../../img/2018_eu_nasci_pra_isso.png'
import Img_10 from '../../img/2019_invencivel.png'
import Img_11 from '../../img/2020_nem_um_passo_atras.png'
import Img_12 from '../../img/2021_sempre_foi_deus.png'
import Img_13 from '../../img/2022_no-limits.png'
import Img_14 from '../../img/2023_decidindo_destinos.png'




    

function Carousel() {

    return (
        <section className={Style.container}>
            <div className={Style.header}>
                <div className={Style.title}>
                    <span className={Style.story}> Nossa História </span>

                    <span> A Arena Conference nasceu como uma extensão do Arena Jovem para ressignificar o feriado de Carnaval. Com uma variedade de preletores, bandas e cantores cristãos, apresentações artísticas e cinematográficas, a conferência reúne mais de 15 mil pessoas em Brasília e mais de 150 mil no Brasil todo.
                        Diferentes temas são abordados anualmente e diante de tantas rotas recalculadas e destinos redefinidos, o tema de 2023 será 20 anos decidindo destinos! Acompanhe nossa retrospectiva:
                    </span>
                </div>

                <div className={Style.buttons}>
                    <button className={Style.button} onClick={()=>{
                            document.getElementById('carouselContainer').scrollLeft -= 420;
                    } }>
                        <BsChevronLeft className={Style.icones} />
                    </button>

                    <button className={Style.button} onClick={()=>{
                       document.getElementById('carouselContainer').scrollLeft += 420;
                    } }>
                        <BsChevronRight className={Style.icones} />
                    </button>
                </div>
            </div>

            <div id='carouselContainer'  className={Style.carousel}>
                <div className={Style.card}>
                    <img src={Img_1} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2010</p>
                        <span>Por Amor</span>
                    </div>
                </div>

                <div className={Style.card}>
                    <img src={Img_2} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2011</p>
                        <span>Somos Um</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_3} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2012</p>
                        <span>Visão, Missão, Destino</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_4} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2013</p>
                        <span>Arena Jovem, Uma Década Decidindo Destinos</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_5} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2014</p>
                        <span>Mutatis Mundi (Mudando o Mundo)</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_6} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2015</p>
                        <span>Paixão e Devoção</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_7} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2016</p>
                        <span>Somos o Povo da Cruz</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_8} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2017</p>
                        <span>Nada a Temer</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_9} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2018</p>
                        <span>Eu Nasci Pra Isso</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_10} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2019</p>
                        <span>Invencível</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_11} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2020</p>
                        <span>Nenhum passo atrás</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_12} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2021</p>
                        <span>Sempre foi Deus</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_13} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2022</p>
                        <span>No Limits</span>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src={Img_14} alt="Primeira imagem" className={Style.card_img} />

                    <div className={Style.card_text}>
                        <p>2022</p>
                        <span>Decidindo Destinos</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel