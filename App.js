import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import dados from "./service/dados"

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
      <Text>hello word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
