import React from 'react'
import Style from './form.module.css'

function Form(){
    return(
        <section className={Style.section}>
            
           <span>
            <h1  className={Style.h1}>
                SEJA UM <br></br> VOLUNTARIO
            </h1> 
           </span>
            
        <div  className={Style.Divform}>
            <form>
                
                <input type="text"  name='name' className={Style.nome}  placeholder='NOME'  />
               

                <div className={Style.divInput} >
                    <input className={Style.input} type='email'  placeholder='E-MAIL' />
                   
                    <input type='number' className={Style.input}  placeholder='FONE:' />
                </div>

                <div className={Style.divInput} >
                        <input type='text' placeholder='IGREJA' className={Style.input}  />
                        <input type='submit' value='INSCREVER-SE' className={Style.increverse}  />
                </div>
            </form>
        </div>
    </section>
    )
}

export default Form