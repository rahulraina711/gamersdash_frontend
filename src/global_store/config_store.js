import {configureStore} from '@reduxjs/toolkit';
import combRed from './combineReducers';

export default function configStore () {
    return configureStore({
        reducer :combRed
    });
};