import React from 'react'
import Style from './button.module.css'

function Button(){
    return(
        <div className={Style.div} >
            <input type='submit' className={Style.button} value="inscrever-se" />

        </div>
    )
}

export default Button