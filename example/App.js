/* eslint-disable no-useless-concat, no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useInteractionManager from '@rnhooks/interaction-manager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App() {
  const interactionComplete = useInteractionManager();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/interaction-manager</Text>
      <Text style={styles.instructions}>{interactionComplete.toString()}</Text>
    </View>
  );
}

export default App;
