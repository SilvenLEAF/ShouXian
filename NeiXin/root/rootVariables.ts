import { assetVariables } from "./variables/assetVariables";
import { colorPalette } from "./variables/colorPalette";
import { subVariables } from "./variables/subVariables";

const themeColor = subVariables.color.redColor;
const bodyBG = 'white';
const rootVariables = {
  themeColor,
  bodyBG,

  navBG: bodyBG,
  bottomTabBG: subVariables.color.whiteBottomTabBG,
  
  linkColor: 'blue',
  fontColor: subVariables.color.grayColor,

  toastTopOffset: 50,
  
  assets: assetVariables,
  colorPalette: colorPalette,
  ...subVariables,
};

export default rootVariables;