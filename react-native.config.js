module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true
    }
  },
  dependencies: {
    'react-native-flipper': {
      platforms: {
        ios: null, // Exclude Flipper on iOS
      },
    },
  },
}