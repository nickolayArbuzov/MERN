import {authAPI} from "../../dal/api";
import {Dispatch} from "redux";

const initialState = {
    currentUser: {},
    isAuth: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const registerTC = (email, password) => (dispatch) => {
    return authAPI.registration(email, password)
        .then((res) => {
            if (res) {
                alert(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error.response.data.message);
        })
}


export const registerAC = (email, password) => ({type: "AUTH/REGISTRATION", email, password});