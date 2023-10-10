import { configureStore } from '@reduxjs/toolkit';
import coordinate from './coodinate';
export default configureStore({
    reducer: {
        coordinate: coordinate,
    },
});
