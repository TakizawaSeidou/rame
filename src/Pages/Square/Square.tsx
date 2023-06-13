import React from "react";
import style from './style.module.css'
import phone from '../../resourse/phone.jpeg'


function Square(){
    return(
        <div className={style.container}>
        <div className={style.first}>
            <img src={phone} className={style.phone}/>
            <div className={style.com}>47% complete</div>
            <div className={style.app}>APP DESIGN</div>


            <br/>
            <div className={style.app}>App Design Task</div>
            App Design Task
        </div>

            <div className={style.second}>


            </div>
        </div>

    )
}
export default Square;
