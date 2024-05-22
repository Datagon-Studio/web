import { Action, configureStore, ThunkAction,combineReducers } from "@reduxjs/toolkit";
import { userService } from "../services/user-service";
import userReducer from "../core/slice/signUpUserVerification"

const rootReducer = combineReducers({
  [userService.reducerPath]: userService.reducer,
  user: userReducer,
});

// Configure store with combined reducer
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userService.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
