import React from "react";
import style from './style.module.css';
import back from '../../../resourse/back.png'
import settings from '../../../resourse/settings.png'
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <Link to={'/'}>
                    <img className={style.back} src={back}/>
                </Link>
                <a className={style.det}>Details</a>
                <img className={style.settings} src={settings}/>
            </div>
        </div>
    )
}
export default Header;