import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FortuneDisplay = ({ isCookieBroken, fortune }) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          isCookieBroken
            ? require('../assets/cookie.png')
            : require('../assets/eat.jpg')
        }
        style={styles.cookieImage}
      />
      <Text style={styles.cookieText}>
        {isCookieBroken ? 'Biscoito Quebrado!' : 'Biscoito da Sorte'}
      </Text>
      {isCookieBroken && <Text style={styles.fortuneText}>{fortune}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cookieImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  cookieText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  fortuneText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default FortuneDisplay;
