import React from "react";
import style from './style.module.css'


function Menu(){
    return(
        <div className={style.container}>
            <div className={style.menu}> <img src={'https://www.iphones.ru/wp-content/uploads/2022/10/916895BF-4B7B-4D45-A22F-9D806094C40A.jpeg'}/>Task Pro
            </div>
            <div className={style.menub}></div>
        </div>

    )
}
export default Menu;