import {configureStore} from '@reduxjs/toolkit';
import phones from './Reducer/PhoneReduser'
import count from './Reducer/CountReducer'


export default configureStore({
    reducer: {phones, count}
})