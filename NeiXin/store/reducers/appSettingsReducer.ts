import rootVariables from "../../root/rootVariables";

/*
  This file contains 5 main things 
  1. initState
  2. iniState interface
  3. reducerTypes map
  4. reducer function (state = initState, action)
  . it is a function which is returns the state based on if/switch statements
  5. optionally payload interface
*/

export interface IAppSettingState {
  themeColor: string,
  isSoundOn: boolean,
  isVibrationOn: boolean,
  isDarkTheme: boolean,
  isTutorialShown: boolean,
}

const initState: IAppSettingState = {
  themeColor: rootVariables.themeColor,
  isSoundOn: true,
  isVibrationOn: true,
  isDarkTheme: false,
  isTutorialShown: true,
}

export const appSettingsReducerTypes = {
  updateThemeColor: 'UPDATE_THEME_COLOR',
  updateIsDarkTheme: 'UPDATE_IS_DARK_THEME',
  updateIsSoundOn: 'UPDATE_IS_SOUND_ON',
  updateIsVibrationOn: 'UPDATE_IS_VIBRATION_ON',

  resetDefault: 'RESET_APP_SETTINGS_TO_DEFAULT',
}

interface IAction {
  type: string,
  payload?: any,
  err?: any,
}

const appSettingsReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case appSettingsReducerTypes.updateThemeColor:
      return {
        ...state,
        themeColor: action.payload,
      } as IAppSettingState;

    case appSettingsReducerTypes.updateIsDarkTheme:
      return {
        ...state,
        isDarkTheme: action.payload,
      } as IAppSettingState;

    case appSettingsReducerTypes.updateIsSoundOn:
      return {
        ...state,
        isSoundOn: action.payload,
      } as IAppSettingState;

    case appSettingsReducerTypes.updateIsVibrationOn:
      return {
        ...state,
        isVibrationOn: action.payload,
      } as IAppSettingState;

    case appSettingsReducerTypes.resetDefault:
      return {
        ...initState,
      } as IAppSettingState;

    default:
      return state;
  }
}

export default appSettingsReducer;