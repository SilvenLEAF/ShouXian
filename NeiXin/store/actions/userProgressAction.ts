import { userProgressReducerTypes } from "../reducers/userProgressReducer";

export const updateRank = (rank: string) => {
  return {
    type: userProgressReducerTypes.updateRank,
    payload: rank,
  }
}

export const updateLevel = (level: number) => {
  return {
    type: userProgressReducerTypes.updateLevel,
    payload: level,
  }
}

export const updateXP = (xp: number) => {
  return {
    type: userProgressReducerTypes.updateXP,
    payload: xp,
  }
}

export const resetDefault = () => {
  return {
    type: userProgressReducerTypes.resetDefault,
    payload: null,
  }
}

const userProgressActions = {
  updateRank,
  updateLevel,
  updateXP,

  resetDefault,
}

export default userProgressActions;