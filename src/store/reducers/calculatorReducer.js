const initialState = {
    prev:null,
}

const calculatorReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_PREV_VAL':
            return{
                ...state,
                prev:action.payload
            }
        case 'RESET_VAL':
            return{
                ...state,
                prev:action.payload
            }
        default:
            return state
    }
}

export {calculatorReducer}