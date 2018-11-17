import React from "react";
import { View, Image, StatusBar, Text, TextInput, StyleSheet } from "react-native";
import { observer } from 'mobx-react';
import styles from './styles'

@observer
export default class HybridApp extends React.Component {

  NavBar = () => {
    let searchtext = this.props.location
    return (
      <View style={styles.header} >
        <Text style={{color: '#111'}}>&#x2039;</Text>
        <Text style={{color: '#111'}}>&#x203A;</Text>
        <View style={styles.navbar} >
          <TextInput onChangeText = { text => { searchtext = text }}
            onSubmitEditing = {() => this.props.push(searchtext)}
            placeholder = "/"
            style = {{borderWidth: 1, borderColor: '#111', color: '#111'}}
          />
        </View>
        <Image source = {{
            uri: "https://distressed.digital/Pictures/isysd/profile.jpg"
          }}
        />
      </View>
    )
  }

  Home = () => {
    return (
      <View style = {styles.content} >
        <Text> Home </Text>
      </View>
    )
  }

  Options = () => {
    return (
      <View style = {styles.content} >
        <Text> Options </Text>
      </View>
    )
  }

  Catchall = () => {
    return (
      <View style = {styles.content} >
        <Text> </Text>
      </View>
    )
  }

  render() {
    return (
      <View style = {StyleSheet.absoluteFill} >
        <View style={styles.statusBarBackground}></View>
        <this.NavBar />
        <this.Home />
      </View>
    );
  }
}
