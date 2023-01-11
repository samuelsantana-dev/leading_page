import React from 'react'
import Style from './footer.module.css'
import Img from '../../img/ultimaFot.jpg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

/*
 * Pacote instalado do react-icons
 */


function Footer(){
    return(
        <footer className={Style.footer}>

          

            <div className={Style.teste}>

           
            <img src={Img} alt='Imagem footer' className={Style.img} />
           

                <ul className={Style.ul}>
                   
                    <li>
                    <li>
                        Endereço:
                    </li>
                    Rua:  Xxxx Xxxx xxx
                    </li>
            
                    <li>
                        <li>CEP: </li>  
                        Xxx-xxx,
                        brasilia - Df
                    </li>
                    <li>
                       
                    </li>  
                    <li>
                    <li>Contato: </li>
                        (XX) x xxxx xxxx
                        Contato@gmail.com
                    </li> 
                </ul>  
            </div>
          
            <ul className={Style.ulIcones}>
               
               <li>
               <FaInstagram className={Style.icones} />
                </li> 

                <li>
                <FaFacebook className={Style.icones} />
                </li>
               
            </ul>

        </footer>
    )
}

/**
 *    
     <div className={Style.contato}>
</div>
 */
export default Footer