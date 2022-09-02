import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';
import orange from '../assets/orange_base64.json';

const App = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      name: 'Pineapple',
      src: require('../assets/pineapple.jpg'),
    },
    {
      name: 'Orange',
      src: {
        uri: orange.base64,
      },
    },
    {
      name: 'Raspberry',
      src: {
        uri: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      index === 2 ? setIndex(0) : setIndex(prev => prev + 1);
    }, 3000);
  }, [index]);

  return (
    <ImageBackground
      source={images[index].src}
      resizeMode="cover"
      style={styles.image}>
      <Text style={styles.text}>{images[index].name}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
