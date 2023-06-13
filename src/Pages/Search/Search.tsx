import React from "react";
import style from './style.module.css'
import diamond from '../../resourse/diamond.jpeg'


function Search(){
    return(
        <div className={style.container}>

            <input  placeholder={'Search  Anything'} className={style.int}/>
            <img src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRh-eALKjfQWuZA7z4hxKKNlx2ZswSrIaeUrSywxstBc5mHrVti'} className={style.ser}/>
        </div>
    )
}
export default Search;