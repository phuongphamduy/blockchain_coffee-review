import { createSlice } from '@reduxjs/toolkit';

export const coordinate = createSlice({
    name: 'coordinate',
    initialState: {
        value: {
            lat: 10.8230989,
            lng: 106.6296638,
            address: '',
        },
    },
    reducers: {
        chooseAddress: (state, coordinate) => {
            state.value = coordinate.payload;
        },
    },
});

export const { chooseAddress } = coordinate.actions;

export default coordinate.reducer;
