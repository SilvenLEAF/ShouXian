import { appSettingsReducerTypes } from "../reducers/appSettingsReducer";

export const updateThemeColor = (color: string)=>{
  return {
    type: appSettingsReducerTypes.updateThemeColor,
    payload: color,
  }
}

export const updateIsDarkTheme = (isDarkTheme: boolean)=>{
  return {
    type: appSettingsReducerTypes.updateIsDarkTheme,
    payload: isDarkTheme,
  }
}

export const updateIsSoundOn = (isSoundOn: boolean)=>{
  return {
    type: appSettingsReducerTypes.updateIsSoundOn,
    payload: isSoundOn,
  }
}

export const updateIsVibrationOn = (isVibrationOn: boolean)=>{
  return {
    type: appSettingsReducerTypes.updateIsVibrationOn,
    payload: isVibrationOn,
  }
}

export const resetDefault = ()=>{
  return {
    type: appSettingsReducerTypes.resetDefault,
    payload: null,
  }
}

const appSettingsActions = {
  updateThemeColor,
  updateIsDarkTheme,
  updateIsSoundOn,
  updateIsVibrationOn,

  resetDefault,
}

export default appSettingsActions;