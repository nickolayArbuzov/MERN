import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>MERN</div>
            <div className={s.login}><NavLink to="/login">Войти</NavLink></div>
            <div className={s.register}><NavLink to="/registration">Регистрация</NavLink></div>
        </div>
    );
}