import React from "react";
// @ts-ignore
import style from './style.module.css';
// @ts-ignore
import back from '../../../resourse/back.png';
import Header from "../Header/Header";
import NameAndDate from "../NameAndDate/NameAndDate";
import Description from "../Description/Description";


function AppDesign(){
    return(
        <div className={style.container}>
        <Header/>
           <div className={style.all}>
               <a className={style.AppDesign}>App Design</a>
               <a className={style.info}>Task manager ui kit</a>
           </div>
            <NameAndDate/>
            <Description/>
        </div>
    )
}
export default AppDesign;