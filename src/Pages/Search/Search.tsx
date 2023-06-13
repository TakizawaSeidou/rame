import React from "react";
import style from './style.module.css'
import lupa from '../../resourse/lupa.png'
import menu from '../../resourse/menu.png'


function Search(){
    return(
        <div className={style.container}>
            <img src={lupa} className={style.ser}/>
            <input placeholder={'Search  Anything'} className={style.int}/>


        </div>
    )
}
export default Search;