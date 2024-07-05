import { createSlice, } from '@reduxjs/toolkit';
import { initialState, reducers } from './reducers';


const slicer = createSlice({
  name: 'appData',
  initialState: initialState,
  reducers: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const { increment, setUser , setUserData} = slicer.actions;
export default slicer.reducer;