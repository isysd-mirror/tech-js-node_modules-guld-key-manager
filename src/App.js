import React from "react";
import { View, Image, StyleSheet, StatusBar, Text } from "react-native";
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import Icons from './icons'
import { Header, Icon, SearchBar, getIconType, Avatar } from 'react-native-elements'
import { inject, observer } from 'mobx-react';

//import * as pgp from 'keyring-pgp'
//import * as gpg from 'keyring-gpg'

Icons.load()

@withRouter
@inject('store')
@observer
export default class App extends React.Component {
	  constructor(props) {
		  super(props);
		  this.store = this.props.store;
	  }

    componentDidMount() {
        StatusBar.setBarStyle("light-content");
    }

    SearchBar = () => {
      let searchtext = this.props.store.location.pathname
      return (
        <SearchBar
          onChangeText={text => {searchtext = text;}}
          onSubmitEditing={() => this.props.store.replace(searchtext)}
          onClearText={console.log('cleared search')}
          icon={{name: 'guld', type: 'guld'}}
          placeholder={this.props.store.location.pathname}
          containerStyle={styles.navbar}
          style={styles.navbar}
        />
      )
    }

    NavBar = () => {
        return (
<Header
    outerContainerStyles={styles.header}
    leftComponent={<Icon name='arrow-left' type='font-awesome' color='#fff' />}
    centerComponent={<SearchBar />}
    rightComponent={<Avatar
        small
        rounded
        source={{uri: "https://distressed.digital/Pictures/isysd/profile.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
    />}
    statusBarProps={{ barStyle: 'dark-content', translucent: true }}
/>
        )
    }

    Home = () => {
        return (
            <View style={styles.content}>
              <Text>Home</Text>
            </View>
        )
    }

    Generate = () => {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
              <Text>Generate</Text>
            </View>
        )
    }

    Import = () => {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
              <Text>Import</Text>
            </View>
        )
    }

    Options = () => {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
              <Text>Options</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <this.NavBar />
                <Switch>
                    <Route exact path="/" component={this.Home} />
                    <Route path="/generate" component={this.Generate} />
                    <Route path="/import" component={this.Import} />
                    <Route path="/options" component={this.Options} />
                </Switch>
            </View>
        );
    }
}
//        <button onClick={() => goBack()}>Go Back</button>

export class Loading extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                    <Image
                        style={[styles.menuImage]}
                        resizeMode={"contain"}
                        source={require("../assets/images/logo.svg")}
                    />
            </View>
        );
    }
}

export class GuldIcon extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <Icon name='guld' family='guld' type='guld'></Icon>
    );
  }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1
    },
    container: {
        flex: 1,
        minWidth: 240,
        minHeight: 360,
        maxWidth: '100%',
        maxHeight: 10000,
        backgroundColor: "#222",
    },
    header: {
          flex: 1,
          minWidth: '100%',
          maxWidth: '100%',
          maxHeight: 110,
          alignSelf: 'flex-start',
          flexGrow: 1,
          flexShrink: 1,
    },
    content: {
          flex: 1,
          minHeight: 100,
          justifyContent: 'space-between',
          flexGrow: 1,
    },
    navbar: {

        alignItems: "center",
        flex: 1,//[0, 1],
        flexDirection: "row",
        alignSelf: 'stretch'
    }
});
