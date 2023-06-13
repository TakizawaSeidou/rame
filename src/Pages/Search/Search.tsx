import React from "react";
import style from './style.module.css'
import diamond from '../../resourse/diamond.jpeg'


function Search(){
    return(
        <div className={style.container}>
            <input placeholder={'Search  Anything'} className={style.int}/>
        </div>
    )
}
export default Search;