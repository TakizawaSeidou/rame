import React from "react";
import style from './style.module.css'
import finger from '../../../resourse/finger.jpeg'
import ball from '../../../resourse/ball.jpeg'

function Square(){
    return(
        <div className={style.container}>
            <div className={style.first}>
            <img src={finger}/>
                CLIENT
                <br/>
                Awe studio des...

            </div>

            <div className={style.second}>
            <img src={ball}/>
                DRIBBBLE
                <br/>
                Create dribbble shot

            </div>
        </div>

    )
}
export default Square;
