import React from "react";
import style from './style.module.css'
import tri from '../../resourse/tri.png'


function Header(){
    return(
        <div className={style.container}>
            TaskPro
            <img src={tri} className={style.men}/>
        </div>

    )
}
export default Header;
