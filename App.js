import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Animal';


const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just </Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red ]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <Cat name="CAT"></Cat>
        <Cat name="dog"></Cat>

      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;