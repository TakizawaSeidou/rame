import React from "react";
import style from './style.module.css';

function Description(){
    return(
        <div className={style.descriptionInfo}>
            <a className={style.description}>Description</a>
            <a className={style.info}>Task manager</a>
        </div>
    )
}
export default Description;