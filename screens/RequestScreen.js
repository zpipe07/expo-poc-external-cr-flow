import React from 'react'
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'

const RequestScreen = () => {
  const onSubmit = (values) => {
    console.log({ values })
  }

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: yup.object().shape({
      address: yup.string().required('Address is required.'),
    }),
    onSubmit,
  })

  return (
    <View style={styles.container}>
      <Text>Request a Visit</Text>

      <Text>Address</Text>
      <TextInput
        value={formik.values.address}
        onChangeText={formik.handleChange('address')}
        onBlur={formik.handleBlur('address')}
        style={styles.input}
      />
      {formik.touched.address && formik.errors.address && (
        <Text>{formik.errors.address}</Text>
      )}

      <Pressable onPress={formik.handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}

export default RequestScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 25,
  },
  input: { borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 25 },
})
