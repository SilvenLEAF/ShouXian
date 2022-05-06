import { StyleSheet } from "react-native";
import rootVariables from "../rootVariables";

export const btnStyles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    // backgroundColor: rootStyleStore.color.redColor,
  },
  fixedWidthBtn: {
    borderRadius: 30,
    backgroundColor: rootVariables.color.redColor,

    width: 170,
    marginBottom: 10,
  },
  switchBtnOrProfileInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },  
});



export const alertModalStyles = StyleSheet.create({
  alertModal: {
    alignItems: 'center',
    backgroundColor: rootVariables.bodyBG,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  alertModalTitle: {
    fontSize: 20,
  },
  alertModalSubTitle: {
    fontSize: 13,
    margin: 10,
  },
  alertModalBtn: {
    margin: 10,
    borderRadius: 30,
    width: 120,
    backgroundColor: rootVariables.color.redColor,
  },
})
