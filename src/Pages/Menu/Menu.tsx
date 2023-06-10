import React from "react";
import style from './style.module.css'
import diamond from '../../resourse/diamond.jpeg'


function Menu(){
    return(
        <div className={style.rav}>
        <div className={style.container}>
            <div>Subscribe</div>

            <img src={diamond} className={style.hz}/>
            <br/>
            To Premium
            <br className={style.mem}/>
            Buy premium membership


        </div>

</div>
    )
}
export default Menu;