import React from "react";
import { View, Text, TextInput } from "./rn";
import { observer } from 'mobx-react';
import styles from './styles'

@observer
export default class HybridApp extends React.Component {

  NavBar () {
    let searchtext = '/'
    return (
      <View>
        <Text>&#x2039;</Text>
        <Text>&#x203A;</Text>
        <View>
          <TextInput onChange = { text => { searchtext = text }} >
            {searchtext}
          </TextInput>
        </View>
      </View>
    )
  }

  Home () {
    return (
      <View>
        <Text> Home </Text>
      </View>
    )
  }

  Options () {
    return (
      <View>
        <Text> Options </Text>
      </View>
    )
  }

  Catchall () {
    return (
      <View>
        <Text> </Text>
      </View>
    )
  }

  render () {
    // StyleSheet.absoluteFill replacement
    return (
      <View>
        <View></View>
        <this.NavBar />
        <this.Home />
      </View>
    );
  }
}
