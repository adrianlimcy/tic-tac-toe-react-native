# Steps
1.  download initial file from
2.  expo update 34.0.0
3.  expo update 35.0.0
4.  expo upgrade
5.  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
6.  npm audit fix
7.  npm start

# Animation
1.  touch Components/Slot/Filled.js
2.  error
    - Animated: `useNativeDriver` was not specified. This is a required 'option and must be explicitly set to `true` or `false`
3.  Solution:
    -  Add code into Filled.js within React.useEffect()
    -  useNativeDriver: true,

# Advanced Animation
1.  expo install lottie-react-native
2.  npm audit fix
3.  mkdir Components/Winner
4.  touch Components/Winner/Winner.js