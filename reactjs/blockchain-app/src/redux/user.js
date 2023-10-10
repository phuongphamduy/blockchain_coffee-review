import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    name: 'user',
<<<<<<< Updated upstream
    initialState: null,
    reducers: {},
});

=======
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

>>>>>>> Stashed changes
export default user.reducer;
