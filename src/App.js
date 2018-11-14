import React from "react";
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Router, Switch, Link, Route } from './Routing';
//import { Opticons } from '@expo/vector-icons';
import Opticons from 'react-native-vector-icons'

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
                        source={require("./Pictures/guld/logo/logo.svg")}
                    />
            </View>
        );
    }
}

export class AppNav extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Link to={'/'} component={TouchableOpacity}>
                    <Image
                        style={[styles.menuImage]}
                        resizeMode={"contain"}
                        source={require("./Pictures/guld/logo/ico.svg")}
                    />
                </Link>
                <Link to={'/generate'} component={TouchableOpacity}>
                    <Opticons name="plus" size={32} color="#D0B460" />
                </Link>
            </View>
        )
    }
}

export class Home extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Text style={styles.appTitle}>Guld Key Manager</Text>
                <Text style={styles.appSubtitle}>Multi-platform app</Text>
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

const styles = StyleSheet.create({
    app: {
        backgroundColor: "#222",
        flex: 1
    },
    appHeader: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    menuImage: {
        width: 100,
        height: 100,
        flex: 3
    },
    appTitle: {
        flex: 1,
        fontSize: 16,
        color: "white"
    },
    appSubtitle: {
        color: "white"
    },
    appIntro: {
        flex: 3,
        fontSize: 30,
        textAlign: "center"
    }
});
