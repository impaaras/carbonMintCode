import { configureStore } from '@reduxjs/toolkit';
import slicer from './slicer';

const store = configureStore({
  reducer: {
    appData: slicer, // Add your slice reducer here
  },
});

export default store;