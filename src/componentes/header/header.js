import React from 'react'
import Style from './header.module.css'
import Img from '../../img/icone.jpg'


function Header(){
    return(
        <header className={Style.header}>
            
            <img src={Img} alt="Foto do header" width='100em' className={Style.img} />

            <div className={Style.div}>
                <span className={Style.text} class="material-symbols-outlined" >
                Menu
                </span>
            </div>
         
          
        </header>
    )
}
/*   <a href='#' className='btn btn-primary'>Botao</a> 
botao em bootstrap*/
export default Header