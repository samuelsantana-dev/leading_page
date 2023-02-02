import React from 'react'
import Style from './header.module.css'
import Img from '../../img/conf_logo.png'


function Header(){
    return(
        <header className={Style.header}>
            
            <img src={Img} alt="Foto do header" width='100em' className={Style.img} />

            <div className={Style.div}>
                <span className={Style.text}  >
                PT | EN
                </span>
            </div>
         
          
        </header>
    )
}
/*   <a href='#' className='btn btn-primary'>Botao</a> 
botao em bootstrap*/
export default Header