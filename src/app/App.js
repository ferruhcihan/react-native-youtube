import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  const bgImg = require('../assets/youtube.png');

  return <ImageBackground source={bgImg} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
