import React from "react";
import style from './style.module.css'
import diamond from '../../../resourse/diamond.jpeg'


function Menu(){
    return(
        <div className={style.rav}>
        <div className={style.container}>
            Subscribe
            <br/>
            To Premium
            <br className={style.mem}/>
            <div className={style.hz}>
            Buy premium membership
            </div>

        </div>
</div>
    )
}
export default Menu;