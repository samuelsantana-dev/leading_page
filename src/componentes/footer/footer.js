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

        <div>
            <footer className={Style.footer}>
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

                     
                  
                    <a href={'https://www.instagram.com/arenaconference/'} > <FaInstagram className={Style.icones} /> </a>
                    <a href={'https://www.facebook.com/arenaconference'} >  <FaFacebook className={Style.icones} />
 </a>

                    <a href={'#'} className={Style.upbutton}> <img src={arrow} alt='arrow' className={Style.arrow} />  Volte ao topo </a>
                </div>
                
            </footer>

            <div className={Style.rights}>
                <span>
                    2022 © Arena Conference. Todos os direitos reservados.
                </span>
            </div>

         
        </div>
    )
}

/**
 *    
     <div className={Style.contato}>
</div>
 */
export default Footer