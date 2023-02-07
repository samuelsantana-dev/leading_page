import React from 'react'
import Style from './carousel.module.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Img_1 from '../../img/img_1.png'
import Img_2 from '../../img/img_2.png'



function Carousel() {
    return (
        <section className={Style.container}>
            <div className={Style.header}>
                <div className={Style.title}>
                    <span className={Style.story}> Nossa História </span>

                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  </span>
                </div>

                <div className={Style.buttons}>
                    <button className={Style.button}>
                        <BsChevronLeft className={Style.icones} />
                    </button>
                    
                    <button className={Style.button}>
                        <BsChevronRight className={Style.icones} />
                    </button>
                </div>
            </div>

            <div className={Style.carousel}>
                <div className={Style.card}>
                     <img src={Img_1} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2003</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                
                <div className={Style.card}>
                     <img src={Img_2} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2006</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                <div className={Style.card}>
                     <img src={Img_1} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2009</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                <div className={Style.card}>
                     <img src={Img_2} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2013</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                <div className={Style.card}>
                     <img src={Img_1} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2016</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                <div className={Style.card}>
                     <img src={Img_2} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2019</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
                <div className={Style.card}>
                     <img src={Img_1} alt="Primeira imagem" className={Style.card_img} />

                     <div className={Style.card_text}>
                        <p>2023</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel