import React from 'react'
import { useFormik } from 'formik'
import { StyleSheet } from 'react-native'
import { Headline, Subheading, Button } from 'react-native-paper'
import * as yup from 'yup'
import { useMutation } from 'react-query'

import Screen from '../components/Screen'
import TextInput from '../components/TextInput'
import api from '../api'

const HomeScreen = ({ navigation }) => {
  const onSuccess = () => {
    navigation.navigate('Request')
  }

  const mutateFunction = async (payload) => {
    await api.checkForService()
  }

  const onSubmit = async () => {
    await mutate()
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

  const [mutate, { isLoading }] = useMutation(mutateFunction, { onSuccess })

  return (
    <Screen style={styles.container}>
      <Headline style={styles.heading}>Request a Visit</Headline>

      <Subheading style={styles.text}>
        Let's confirm we can come to your address
      </Subheading>

      <TextInput label="Patient Address" name="address" formik={formik} />

      <Button
        disabled={!formik.values.address}
        loading={isLoading}
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
