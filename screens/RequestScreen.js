import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Headline, Button, Checkbox, HelperText } from 'react-native-paper'

import Screen from '../components/Screen'
import TextInput from '../components/TextInput'

const RequestScreen = () => {
  const onSubmit = (values) => {
    console.log({ values })
  }

  const formik = useFormik({
    initialValues: {
      address: '',
      firstName: '',
      lastName: '',
      symptoms: '',
      cellPhone: '',
      email: '',
      acceptTerms: false,
    },
    validationSchema: yup.object().shape({
      address: yup.string().required('Address is required.'),
      firstName: yup.string().required('First name is required.'),
      lastName: yup.string().required('Last name is required.'),
      symptoms: yup.string().required('Symptoms are required.'),
      cellPhone: yup.string().required('Phone number is required.'),
      email: yup.string().required('Email is required.'),
      acceptTerms: yup.bool().oneOf([true], 'You must accept the terms.'),
    }),
    onSubmit,
  })

  const handleCheckboxPress = () => {
    formik.setFieldValue('acceptTerms', !formik.values.acceptTerms)
  }

  return (
    <Screen>
      <Headline style={styles.headline}>Request a Visit</Headline>

      <TextInput label="Patient Address" name="address" formik={formik} />

      <TextInput label="Patient First Name" name="firstName" formik={formik} />

      <TextInput label="Patient Last Name" name="lastName" formik={formik} />

      <TextInput label="Symptoms" name="symptoms" formik={formik} />

      <TextInput label="Your Phone Number" name="cellPhone" formik={formik} />

      <TextInput label="Your Email Address" name="email" formik={formik} />

      <Checkbox.Item
        label="I agree to DispatchHealth's Privacy Policy & Terms of Service"
        status={formik.values.acceptTerms ? 'checked' : 'unchecked'}
        onPress={handleCheckboxPress}
        style={styles.checkbox}
      />
      <HelperText
        type="error"
        visible={!!(formik.touched.acceptTerms && formik.errors.acceptTerms)}
      >
        {formik.errors.acceptTerms}
      </HelperText>

      <Button mode="contained" onPress={formik.handleSubmit}>
        Submit
      </Button>
    </Screen>
  )
}

export default RequestScreen

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row-reverse',
    justifyContent: Platform.OS === 'web' ? 'flex-end' : 'flex-start',
  },
})
