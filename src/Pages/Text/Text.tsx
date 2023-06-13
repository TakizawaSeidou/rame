import React from "react";
import style from './style.module.css'



function Text(){
    return(
        <div className={style.container}>
            <div className={style.pen}>Pending Tas</div>
            <div className={style.sl}>See all</div>
        </div>

    )
}
export default Text;
