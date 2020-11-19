import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Caption,
  HelperText,
  TextInput as PaperTextInput,
} from 'react-native-paper'

const TextInput = ({ label, name, formik }) => {
  const hasError = !!(formik.touched[name] && formik.errors[name])

  return (
    <View style={styles.container}>
      <PaperTextInput
        error={hasError}
        label={label}
        onBlur={formik.handleBlur(name)}
        onChangeText={formik.handleChange(name)}
        value={formik.values[name]}
      />

      <HelperText type="error" visible={hasError} style={styles.error}>
        {formik.errors[name]}
      </HelperText>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  error: {
    position: 'absolute',
    bottom: 5,
  },
})
