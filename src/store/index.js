import {configureStore} from '@reduxjs/toolkit';
import {calculatorReducer} from './reducers/calculatorReducer.js';

const calculatorStore = configureStore({
    reducer:{
        val:calculatorReducer
    }
})

export default calculatorStore;