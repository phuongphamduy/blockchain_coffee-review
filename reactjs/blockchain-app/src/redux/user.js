import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    name: 'user',
  initialState: { user: {} },
    reducers: {
        Login: (state, action) => {
            sessionStorage.setItem('user', action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { Login, setUser } = user.actions;

export default user.reducer;
