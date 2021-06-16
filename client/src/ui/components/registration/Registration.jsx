import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import s from "./Registration.module.css";
import {Input} from "../../utils/input/Input";
import {registerTC} from "../../../bll/reducers/userReducer";

export const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const registrationHandler = useCallback(() => {
        dispatch(registerTC(email, pass))
    },[email, pass]);

    return (
        <div className={s.container}>
            <div className={s.header}>Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter your email"/>
            <Input value={pass} setValue={setPass} type="password" placeholder="Enter your password"/>
            <button onClick={registrationHandler}>Enter</button>
        </div>
    );
}