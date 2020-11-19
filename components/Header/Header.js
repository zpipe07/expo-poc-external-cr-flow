import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View>
      <Text style={styles.dispatch}>dispatch</Text>
      <Text style={styles.health}>HEALTH</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  dispatch: {
    fontSize: 20,
    fontWeight: '800',
    color: 'red',
    textAlign: 'center',
  },
  health: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
  },
})
