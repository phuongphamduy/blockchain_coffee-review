import { configureStore } from '@reduxjs/toolkit';
import coordinate from './coodinate';
import user from './user';
export default configureStore({
    reducer: {
        coordinate: coordinate,
        user: user,
    },
});
