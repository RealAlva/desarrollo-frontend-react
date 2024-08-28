import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  email: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      console.log('Login Success - User:', state.user, 'Email:', state.email);
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
