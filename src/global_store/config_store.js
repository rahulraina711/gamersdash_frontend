import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';

export default function configStore () {
    return configureStore({
        reducer :userReducer
    });
};