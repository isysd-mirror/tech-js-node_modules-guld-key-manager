import {Platform, StyleSheet, StatusBar} from 'react-native';
import styles from './styles.js'

if ( Platform.OS === 'android' ) styles.statusBarBackground.height = StatusBar.currentHeight

export default StyleSheet.create(styles);
