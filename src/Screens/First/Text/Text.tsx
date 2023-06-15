import React from "react";
import style from './style.module.css'



function Text(){
    return(
        <div className={style.container}>
            <div className={style.pen}>Pending Task</div>
            <div className={style.sl}>See all</div>
        </div>

    )
}
export default Text;
