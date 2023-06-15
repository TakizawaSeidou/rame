import React from "react";
import style from './style.module.css'
import phone from '../../../resourse/phone.jpeg'
import lap from '../../../resourse/lap.jpeg'
import {Link} from "react-router-dom";

function Square(){
    return(
        <div className={style.container}>
        <div className={style.first}>
            <img src={phone} className={style.phone}/>
            <div className={style.com}>47% complete</div>

        </div>

            <div className={style.second}>
                <img src={lap} className={style.lap}/>
                WEB
                <br/>
                <Link to={'app-design'}>
                    Web design
                </Link>

            </div>
        </div>

    )
}
export default Square;
