import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FortuneDisplay from '../components/FortuneDisplay';
import fortunesData from '../data/fortunes.json';

const HomeScreen = () => {
  const [isCookieBroken, setIsCookieBroken] = useState(false);
  const [currentFortune, setCurrentFortune] = useState(null);

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunesData.length);
    setCurrentFortune(fortunesData[randomIndex]);
    setIsCookieBroken(true);
  };

  return (
    <View style={styles.container}>
      <FortuneDisplay isCookieBroken={isCookieBroken} fortune={currentFortune} />
      <Button title="Quebrar o Biscoito" onPress={breakCookie} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
