import React from "react";
import style from './style.module.css'
import diamond from '../../resourse/diamond.jpeg'


function Search(){
    return(
        <div className={style.container}>
            <input placeholder={'Search  Anything'} className={style.int}/>
            <img src={'https://e7.pngegg.com/pngimages/409/527/png-clipart-magnifying-glass-computer-icons-magnifying-glass-glass-black.png'}/>
        </div>
    )
}
export default Search;