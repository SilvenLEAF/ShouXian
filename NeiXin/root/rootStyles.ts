import { StyleSheet } from "react-native";
import rootVariables from "./rootVariables";
import { alertModalStyles, btnStyles } from "./styles/subStyles";

const rootStyles = StyleSheet.create({
  ...btnStyles,
  ...alertModalStyles,
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomedContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: rootVariables.bodyBG,
    marginBottom: 85 + 29,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 85 + 29,
  },
  externalLink: {
    color: rootVariables.linkColor,
    marginLeft: 5,
  },
})

export default rootStyles