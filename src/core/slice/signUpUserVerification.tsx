// userSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  status: 'unverified' | 'verified';
}

const initialState: UserState = {
  status: 'unverified',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserStatus(state, action: PayloadAction<'unverified' | 'verified'>) {
      state.status = action.payload;
    },
  },
});

export const { setUserStatus } = userSlice.actions;

export default userSlice.reducer;
