import {SET_COUNTER, SET_CLEAR, SET_INCREMENT, SET_DECREMENT} from './types'



export const counterIncrement = () => {
    return {
        type: SET_INCREMENT
    };
}

export const counterDecrement = () => {
    return {
        type: SET_DECREMENT
    };
}

export const counterClear =() => {
    return {
        type : SET_CLEAR
    };
}

export const counterSet = (recivednumber) => {
    return {
        type : SET_COUNTER,
        payload: recivednumber
    };
}