module.exports = function(api) {
  api.cache.using(() => process.env.BABEL_ENV)
  return {
    presets: [
      "module:metro-react-native-babel-preset"
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
    ],
    env: {
      mobile: {
        presets: [
          "babel-preset-expo",
        ]
      },
      web: {
        plugins: [
          "expo-web",
          "react-native-web",
          [
            "babel-plugin-module-resolver",
            {
              "alias": {
                 "react-native-vector-icons":  "@expo/vector-icons",
                 "@expo/vector-icons":  "expo-web",
                 "expo":  "expo-web",
                 "react-native":  "react-native-web"
              }
            }
          ]
        ]
      },
      desktop: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-flow"
        ],
        plugins: [
          [
            "babel-plugin-module-resolver",
            {
              "alias": {
                 "@expo/vector-icons":  "react-native-vector-icons",
                 "react-native":  "proton-native"
              }
            }
          ]
        ]
      },
    }
  }
}

