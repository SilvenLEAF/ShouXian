import React, { useEffect, useState } from 'react'
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Button, Provider } from 'react-native-paper';

// ___________________ store (redux + async)
import { connect } from 'react-redux';
import AsyncStore from '../../utils/AsyncStore';

import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';
import { IUserProgressState } from '../../store/reducers/userProgressReducer';

import JSONTree from 'react-native-json-tree';
import rootVariables from '../../root/rootVariables';
import rootStyles from '../../root/rootStyles';

interface propsInterface extends IAppSettingState, IUserProgressState {
  navigation: NavigationProp<any>,
}


function AsyncStorageScreen(props: propsInterface) {
  const [storageKeys, setStorageKeys] = useState<string[]>();
  const [allStorageKeyVals, setAllStorageKeyVals] = useState<[string, string | null][]>([]);

  const jsonTheme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
  }

  const refreshStore = async () => {
    const readOnlyKeys = await AsyncStore.getAllStorageKeys() || [];
    const keys = [...readOnlyKeys];
    const readOnlyKeyVal = await AsyncStore.multiGetData(keys.sort()) || [];
    const keyVal = [...readOnlyKeyVal]
    setAllStorageKeyVals(keyVal);
    setStorageKeys(keys);
  }


  useEffect(() => {
    refreshStore()
  }, [])
  return (
    <Provider>
      <ScrollView contentContainerStyle={{ ...rootStyles.container }}>

        <View style={{ ...rootStyles.container, marginTop: 50}}>
          <Text>Welcome to Storage Screen!</Text>
          <Button uppercase={false} style={{ ...rootStyles.btn, backgroundColor: props.themeColor, margin: 20, }} mode="contained"
            onPress={refreshStore}>
            Refresh store
          </Button>
          <View style={styles.storageHolder}>
            {
             !allStorageKeyVals[0] ? (
                <Text style={{ marginTop: 100, fontSize: 27, color: props.themeColor, textAlign: 'center' }}>---Storage Empty---</Text>
              ) : allStorageKeyVals.map((item, index) => {
                return (
                  <View style={styles.storageItem} key={index}>
                    <Text style={styles.storageKey}>{item[0]}</Text>
                    {/* <Text style={styles.storageValue}>{item[1]}</Text> */}
                    {/* <JSONTree data={{ name: 'SilvenLEAF', age: 27, isFemale: true }} /> */}
                    {item[1] && (
                      <JSONTree
                        data={JSON.parse(item[1])}
                        theme={jsonTheme}
                        invertTheme={true}
                      // getItemString={(type, data, itemType, itemString) => <Text>{type}</Text>}
                      />
                    )
                    }
                  </View>
                )
              })
            }
          </View>
        </View>

      </ScrollView>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: rootVariables.bodyBG,
  },
  storageHolder: {
    width: 320,
    marginTop: 20,
    marginBottom: 20,

  },
  storageItem: {

  },

  storageKey: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
  },

  storageValue: {
    // fontSize: 27,
  },




})


const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

export default connect(mapStateToProps)(AsyncStorageScreen)
