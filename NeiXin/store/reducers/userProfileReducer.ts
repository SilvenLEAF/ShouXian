/*
  This file contains 5 main things 
  1. initState
  2. iniState interface
  3. reducerTypes map
  4. reducer function (state = initState, action)
  . it is a function which is returns the state based on if/switch statements
  5. optionally payload interface
*/

export interface IUserProfileState {
  username: string,
  fancyTitle: string,
  age: number,
  country: string,
  gender: 'male'|'female',
}

export interface IUserProfileUpdatePayload {
  username?: string,
  fancyTitle?: string,
  age?: number,
  country?: string,
  gender?: 'male'|'female',
}

const initState: IUserProfileState = {
  username: "Eggy",
  fancyTitle: "Eggy the Omlette",
  age: new Date().getFullYear() - 2002,
  country: "China",
  gender: "male",
};

export const userProfileReducerTypes = {
  updateProfile: 'UPDATE_PROFILE',
  resetDefault: 'RESET_USER_PROFILE_TO_DEFAULT',
}

interface IAction {
  type: string,
  payload?: any,
  err?: any,
}

const userProfileReducer = (state = initState, action: IAction) => {
  console.log({ action: action })
  switch (action.type) {
    case userProfileReducerTypes.updateProfile:
      return {
        ...state,
        ...action.payload,
      } as IUserProfileState;
    
      case userProfileReducerTypes.resetDefault:
        return {
          ...initState,
        } as IUserProfileState;

    default:
      return state;
  }
}

export default userProfileReducer;