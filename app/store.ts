import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// Reducers
import counterReducer from '../features/counter/counterSlice';
import randomQuoteReducer from '../features/random-quote/randomQuoteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomQuote: randomQuoteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
