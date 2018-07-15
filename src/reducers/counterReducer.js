import {SET_COUNTER, SET_CLEAR, SET_INCREMENT, SET_DECREMENT} from '../actions/types'



export default (state = 0, action) => {
    switch (action.type) {
        case SET_INCREMENT:
            return state + 1;
        case SET_DECREMENT :
            return state - 1;
        case SET_CLEAR:
            return 0;
        case SET_COUNTER:
            return action.payload;        
        default:
            return state;        
            
    }
}