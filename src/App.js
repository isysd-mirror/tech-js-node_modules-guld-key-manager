import React from "react";
import { View, Image, StyleSheet, StatusBar, Text } from "react-native";
//import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Icons from './icons'
import { Header, Icon, SearchBar, getIconType } from 'react-native-elements'
//import * as pgp from 'keyring-pgp'
//import * as gpg from 'keyring-gpg'

Icons.load()

export default class App extends React.Component {

    componentDidMount() {
        StatusBar.setBarStyle("light-content");
    }

    render() {
        return (
            <View style={styles.app}>
                <Home />
            </View>
        );
    }
}

//            <View style={styles.app}>
//                <Router>
//                    <Switch hideNavBar={true}>
//                        <Route exact path="/" component={Home} />
//                        <Route path="/generate" component={Generate} />
//                        <Route path="/import" component={Import} />
//                        <Route path="/options" component={Options} />
//                    </Switch>
//                </Router>
//            </View>


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

export class NavBar extends React.Component {
  render () {
    return (
      <SearchBar
        onChangeText={console.log('changed search')}
        onClearText={console.log('cleared search')}
        icon={{name: 'guld', type: 'guld', size: 36}}
        placeholder='Search guld blocktree' />
    )
  }
}

export class AppNav extends React.Component {
    render() {
        return (
            <Header backgroundColor="#222">
              <Link to={'/'}>
                <Icon name='guld' type='guld' />
              </Link>
              <Link to={'/generate'}>
                <Icon name='plus' type='font-awesome' color='#D0B460' size={48} />
              </Link>
              <Link to={'/import'}>
                <Icon name='chevron-down' type='font-awesome' color='#D0B460' size={48} />
              </Link>
              <Link to={'/options'}>
                <Icon name='cog' type='font-awesome' color='#D0B460' size={48} />
              </Link>
            </Header>
                    
        )
    }
}

export class Home extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <NavBar></NavBar>
            </View>
        );
    }
}


export class Generate extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <NavBar></NavBar>
            </View>
        )
    }
}

export class Import extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <NavBar></NavBar>
            </View>
        )
    }
}

export class Options extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <NavBar></NavBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    menuImage: {
        width: 50,
        height: 50,
        flex: 3
    }
});
