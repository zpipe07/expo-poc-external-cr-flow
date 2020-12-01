import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 800,
    width: '100%',
    marginHorizontal: 'auto',
  },
  screen: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 25,
  },
})
