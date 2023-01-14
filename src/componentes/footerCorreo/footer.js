import React from 'react'
import Style from './footer.module.css'
import Img from '../../img/ultimaFot.jpg'
import LOGO from '../../img/conf_logo_black.png'
import arrow from '../../img/arrow_up.svg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

/*
 * Pacote instalado do react-icons
 */


function Footer() {
    return (
        <footer className={Style.footer}>

        {/* <div className={Style.container}> */}
        
            <div className={Style.contatoImg}>

                <div className={Style.divImg}>
                    <img src={LOGO} alt='Imagem footer' className={Style.img} />
                </div>
                <div>
                    <span>
                        Endereço
                        <br></br>
                        Rua Xxxxx Xxxxxxx, XXX
                        CEP XXXXX-XXX, Brasília - DF
                    </span>
                </div>
                
                <div>
                    <span>
                        Contato
                        <br></br>
                        (XX) XXXX-XXXX
                        contato@arenaconference.com
                    </span>
                </div>
            </div>

            <div className={Style.links}>

                <FaInstagram className={Style.icones} />
                <FaFacebook className={Style.icones} />

                <a href={'#'} className={Style.upbutton}> <img src={arrow} alt='arrow' className={Style.arrow} /> </a>
            </div>


        {/* </div> */}

        </footer>
    )
}

/**
 *    
     <div className={Style.contato}>
</div>
 */
export default Footer