import { createSlice } from '@reduxjs/toolkit';

export const searchAddress = createSlice({
    name: 'coordination',
    initialState: {
        value: {
            lat: 10.8230989,
            lng: 106.6296638,
        },
    },
    reducers: {
        chooseAddress: (state, coordinate) => {
            state.value = coordinate.payload;
        },
    },
});

export const { chooseAddress } = searchAddress.actions;

export default searchAddress.reducer;
