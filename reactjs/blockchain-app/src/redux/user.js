import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    name: 'user',
    initialState: { user: {} },
    reducers: {},
});

export const { Login } = user.actions;

export default user.reducer;
