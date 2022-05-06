import { userRanks } from "../core/Gamify";
import rootVariables from "../root/rootVariables";



export const randomNumber = (max: number, min: number = 0) => {
  return min + Math.floor(Math.random() * max);
}

/*
 .  refine button color (replace if match, if not ignore)
 .  this is so that secondary button color doesn't be the same 
 .  as primary danger button color (e.g. cancel vs delete buttons)
*/
const grayColor = rootVariables.color.grayColor;
const redColor = rootVariables.color.redColor;
export const refineBtnColor = (color: string, replaceColor: string = grayColor, checkColor: string = redColor) => {
  return color === checkColor ? replaceColor : color;
}

export const removeNullProps = (obj: any) => {
  try {
    const newObj: any = {};
    for (var prop in obj) {
      if (!['', null, undefined].includes(obj[prop])) {
        if (typeof obj[prop] === 'string') newObj[prop] = obj[prop].trim();
        else newObj[prop] = obj[prop];
      }
    }
    return newObj;
  } catch (error) {
    console.error(error);
    return obj;
  }
}

export const removeDuplicateObjItems = (array: any[], prop: string) => {
  try {
    const uniqueIds = Array.from(new Set(array.map(item => item[prop])))
    const uniqueRecords = uniqueIds.map(id => array.find(a => a[prop] === id))

    return uniqueRecords;
  } catch (error) {
    console.error(error);
    return array;
  }
}

export const removeArrayItems = (items: any[], array: any[]) => {
  try {
    const remainderArray = [...array];

    for (let item of items) {
      const arrIndex = remainderArray.indexOf(item);
      if (arrIndex !== -1) {
        remainderArray.splice(arrIndex, 1);
      }
    }
    return remainderArray;
  } catch (error) {
    console.error(error);
    return array;
  }
}

export const getRankFromXP = (xp: number) => {
  try {
    const rNo = Math.floor(xp / 1000);

    if (rNo < 0) return userRanks[0]
    if (rNo < userRanks.length) return userRanks[rNo]

    return userRanks[userRanks.length - 1]
  } catch (error) {
    console.error(error);
    return 'N/A';
  }
}

export const getLevelFromXP = (xp: number) => {
  const level = Math.floor(xp / 100);
  return level < 0 ? 0 : level;
}