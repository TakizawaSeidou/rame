import React from "react";
// @ts-ignore
import style from './style.module.css';
import date from '../../../resourse/date.png';


function NameAndDate(){
    return(
        <div className={style.container}>
            <div className={style.william}>
                <img className={style.photo} src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}/>
                <div className={style.info}>
                    <a className={style.info1}>Assigned to</a>
                    <a className={style.info2}>William Smith</a>
                </div>
            </div>
            <div className={style.date}>
                <img className={style.datePhoto} src={date}/>
                <div className={style.info}>
                    <a className={style.info1}>Due date</a>
                    <a className={style.info2}>Feb 20</a>
                </div>
            </div>

        </div>
    )
}
export default NameAndDate;