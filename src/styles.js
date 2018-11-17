import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  app: {
    backgroundColor: "grey",
    color: "#111",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1
  },
  statusBarBackground: {
    height: StatusBar.currentHeight || 18,
    backgroundColor: "white"
  },
  navbarIcon: {
    margin: 4
  },
  header: {
    flex: 1,
    minWidth: '100%',
    maxWidth: '100%',
    maxHeight: 70,
    alignSelf: 'flex-start',
    borderBottomWidth: 0,
    padding: 0,
    flexDirection: 'row',
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
    flex: 3, //[0, 1],
    flexDirection: "row",
    alignSelf: 'stretch'
  }
});
