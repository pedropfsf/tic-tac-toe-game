import { StyleSheet, Text, View } from 'react-native';

function SelectPlayers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SelectPlayers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default SelectPlayers;