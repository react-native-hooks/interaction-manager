# @rnhooks/interaction-manager [![Build Status](https://travis-ci.com/react-native-hooks/interaction-manager.svg?branch=master)](https://travis-ci.com/react-native-hooks/interaction-manager) [![Maintainability](https://api.codeclimate.com/v1/badges/f0b9609e95f519dd9276/maintainability)](https://codeclimate.com/github/react-native-hooks/interaction-manager/maintainability)

> React Native hook for [Interaction Manager](https://facebook.github.io/react-native/docs/interactionmanager#docsNav)

### Installation

```bash
yarn add @rnhooks/interaction-manager
```

### Usage

```js
import useInteractionManager from '@rnhooks/interaction-manager';

function App() {
  const interactionComplete = useInteractionManager();
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/interaction-manager</Text>
      <Text style={styles.instructions}>{interactionComplete.toString()}</Text>
    </View>
  );
}

```

### Output

| Name                | Default | Type     | Description          |
| ------------------- | :------ | --------:| -------------------- |
| interactionComplete | false   | boolean  | Interaction Complete |
