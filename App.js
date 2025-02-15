import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Week02 from './Week02';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Week02 />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
