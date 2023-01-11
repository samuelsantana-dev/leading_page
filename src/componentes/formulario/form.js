import React from 'react'
import Style from './form.module.css'

function Form(){
    return(
        <section className={Style.section}>
            
            <div className={Style.divH1}>
                <h1  className={Style.h1}>
                    SEJA UM <br></br> VOLUNTARIO
                </h1>
            </div>
            
        <div  className={Style.form}>
            <form>
                
                <div className={Style.divNome} >
                    <input type="text"  name='name' className={Style.nome}  placeholder='NOME'  />
                </div>

                <div className={Style.divInput} >

                    <input className={Style.input} type='email'  placeholder='E-MAIL' />
                   
                    <input type='number' className={Style.input}  placeholder='FONE:' />
                   
                    <input type='text' placeholder='IGREJA' className={Style.input}  />
            
                    <input type='submit' value='INSCREVER-SE' className={Style.inscrevase} />
                </div>
            </form>
        </div>
    </section>
    )
}

export default Form