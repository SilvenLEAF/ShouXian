import { StyleSheet } from "react-native";
import rootVariables from "./rootVariables";
import { alertModalStyles, btnStyles } from "./styles/subStyles";

const rootStyles = StyleSheet.create({
  ...btnStyles,
  ...alertModalStyles,
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: rootVariables.bodyBG,
    marginBottom: 85 + 29,
  },
  bottomlessContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: rootVariables.bodyBG,
  },
  externalLink: {
    color: rootVariables.linkColor,
    marginLeft: 5,
  },
})

export default rootStyles