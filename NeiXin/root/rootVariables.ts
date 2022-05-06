import { assetVariables } from "./variables/assetVariables";
import { subVariables } from "./variables/subVariables";

const themeColor = 'red';
const bodyBG = 'white';
const rootVariables = {
  themeColor,
  bodyBG,

  navBG: bodyBG,
  bottomTabBG: subVariables.color.whiteBottomTabBG,
  
  linkColor: 'blue',
  fontColor: subVariables.color.grayColor,
  
  assets: assetVariables,
  ...subVariables,
};

export default rootVariables;