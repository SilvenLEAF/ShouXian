import { userRankMap, userRankType } from "../../core/Gamify";

/*
  This file contains 5 main things 
  1. initState
  2. iniState interface
  3. reducerTypes map
  4. reducer function (state = initState, action)
  . it is a function which is returns the state based on if/switch statements
  5. optionally payload interface
*/

export interface IUserProgressState {
  rank: userRankType,
  xp: number,
  level: number,
}

const initState: IUserProgressState = {
  rank: userRankMap.level0,
  xp: 0,
  level: 0,
};

export const userProgressReducerTypes = {
  updateRank: 'UPDATE_RANK',
  updateLevel: 'UPDATE_LEVEL',
  updateXP: 'UPDATE_XP',

  resetDefault: 'RESET_USER_PROGRESS_TO_DEFAULT',
}

interface IAction {
  type: string,
  payload?: any,
  err?: any,
}

const userProgressReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case userProgressReducerTypes.updateRank:
      return {
        ...state,
        rank: action.payload,
      } as IUserProgressState;

    case userProgressReducerTypes.updateLevel:
      return {
        ...state,
        level: action.payload,
      } as IUserProgressState;

    case userProgressReducerTypes.updateXP:
      return {
        ...state,
        xp: action.payload,
      } as IUserProgressState;

    case userProgressReducerTypes.resetDefault:
      console.log('Requested to Reset Progress');
      return {
        ...initState,
      } as IUserProgressState;

    default:
      return state;
  }
}

export default userProgressReducer;