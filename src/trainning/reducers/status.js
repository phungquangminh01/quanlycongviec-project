var initialState = false;

var myReducer = (state = initialState, action) => { // phân tích hành động
    if(action.type == 'TOGGLE_STATUS') {
        state = !state;
        return state;
    }
    return state;
}

export default myReducer;