import React from "react";
import { View, Image, StyleSheet, StatusBar, Text } from "react-native";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
//import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
//import * as pgp from 'keyring-pgp'
//import * as gpg from 'keyring-gpg'

export default class App extends React.Component {

    componentDidMount() {
        StatusBar.setBarStyle("light-content");
    }

    render() {
        return (
            <View style={styles.app}>
                <Router>
                    <Switch hideNavBar={true}>
                        <Route exact path="/" component={Home} />
                        <Route path="/generate" component={Generate} />
                        <Route path="/import" component={Import} />
                        <Route path="/options" component={Options} />
                    </Switch>
                </Router>
            </View>
        );
    }
}

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

export class AppNav extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Link to={'/'}>
                    <Image
                        style={[styles.menuImage]}
                        resizeMode={"contain"}
                        source={require("../assets/images/ico.svg")}
                    />
                </Link>
                <Link to={'/generate'}>
                    <Text>Generate</Text>
                </Link>
                <Link to={'/import'}>
                    <Text>Import</Text>
                </Link>
                <Link to={'/options'}>
                    <Text>Options</Text>
                </Link>
            </View>
        )
    }
}

export class Home extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <AppNav></AppNav>
            </View>
        );
    }
}


export class Generate extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <AppNav></AppNav>
            </View>
        )
    }
}

export class Import extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <AppNav></AppNav>
            </View>
        )
    }
}

export class Options extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <AppNav></AppNav>
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
