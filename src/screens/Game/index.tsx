import { StyleSheet, Text, View } from 'react-native';

function Game() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game</Text>
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

export default Game;