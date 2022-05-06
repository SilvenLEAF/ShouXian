import { IUserProfileUpdatePayload, userProfileReducerTypes } from "../reducers/userProfileReducer";

export const updateProfile = (profileData: IUserProfileUpdatePayload)=>{
  return {
    type: userProfileReducerTypes.updateProfile,
    payload: profileData,
  }
}

export const resetDefault = ()=>{
  return {
    type: userProfileReducerTypes.resetDefault,
    payload: null,
  }
}

const userProfileActions = {
  updateProfile,
  resetDefault,
}

export default userProfileActions;