import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text preset="headingLarge" italic>
        React Native
      </Text>
      <Text preset="headingMedium">React Native</Text>

      <Text preset="headingSmall">React Native</Text>
    </SafeAreaView>
  );
}

export default App;
