import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

// import Header from '../components/Header'

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Request')
  }

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <Text style={styles.heading}>Request a Visit</Text>

      <Text style={styles.text}>Let's confirm we can come to your address</Text>

      <Text>Patient Address</Text>
      <TextInput
        onChange={() => {}}
        value="615 Galapago St"
        style={styles.input}
      />

      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Check for Service</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 25,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
  },
  text: {
    textAlign: 'center',
    marginBottom: 25,
  },
  input: { borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 25 },
  button: { backgroundColor: 'green', padding: 25, borderRadius: 50 },
  buttonText: { color: 'white' },
})
