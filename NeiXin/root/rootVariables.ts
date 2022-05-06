import { subVariables } from "./variables/subVariables";

const rootVariables = {
  themeColor: 'red',
  bodyBG: 'white',
  linkColor: 'blue',
  ...subVariables,
};

export default rootVariables;