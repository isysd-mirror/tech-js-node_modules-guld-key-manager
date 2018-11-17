import {Platform, StyleSheet} from 'react-native';
import styles from './styles.js'

if ( Platform.OS === 'ios' ) styles.statusBarBackground.height = 18

export default StyleSheet.create(styles);
