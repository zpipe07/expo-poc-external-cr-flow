import React from 'react'
import { useFormik } from 'formik'
import { StyleSheet, Text, View } from 'react-native'
import { Headline, Subheading, Button } from 'react-native-paper'
import * as yup from 'yup'

import Screen from '../components/Screen'
import TextInput from '../components/TextInput'

const HomeScreen = ({ navigation }) => {
  const onSubmit = () => {
    navigation.navigate('Request')
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
    <Screen style={styles.container}>
      <Headline style={styles.heading}>Request a Visit</Headline>

      <Subheading style={styles.text}>
        Let's confirm we can come to your address
      </Subheading>

      <TextInput label="Patient Address" name="address" formik={formik} />

      <Button
        disabled={!formik.values.address}
        mode="contained"
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        Check for Service
      </Button>
    </Screen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 25,
  },
  inputWrapper: {
    marginBottom: 25,
  },
})
