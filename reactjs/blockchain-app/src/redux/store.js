import { configureStore } from '@reduxjs/toolkit';
import searchAddress from './searchAddress';
export default configureStore({
    reducer: {
        searchAddress: searchAddress,
    },
});
