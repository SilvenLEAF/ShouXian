import { configureStore } from "@reduxjs/toolkit";
import appSettingsReducer, { IAppSettingState } from "./reducers/appSettingsReducer";
import userProfileReducer, { IUserProfileState } from "./reducers/userProfileReducer";
import userProgressReducer, { IUserProgressState } from "./reducers/userProgressReducer";

export const store = configureStore({
  reducer: {
    app: appSettingsReducer,
    progress: userProgressReducer,
    profile: userProfileReducer,
  }
});

/* 
  whatever structure is inside reducer, 
  we'll have it same here, 
  difference is reducer will have reducers,
  here we'll have state interfaces
*/
export interface IRootState {
  app: IAppSettingState,
  progress: IUserProgressState,
  profile: IUserProfileState,
}