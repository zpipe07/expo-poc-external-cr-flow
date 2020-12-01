import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Headline, Button, Checkbox, HelperText } from 'react-native-paper'
import { useMutation } from 'react-query'

import Screen from '../components/Screen'
import TextInput from '../components/TextInput'
import api from '../api'

const RequestScreen = ({ navigation }) => {
  const onSuccess = () => {
    console.log('success!')
    navigation.navigate('Complete')
  }

  const mutateFunction = async (payload) => {
    try {
      const res = await api.createCareRequest(payload)

      if (![200, 201].includes(res.status)) {
        throw new Error('There was an error.')
      }
    } catch (error) {
      throw error
    }
  }

  const onSubmit = async (values) => {
    const payload = {
      care_request: {
        request_type: Platform.OS,
        street_address_1: values.address,
        street_address_2: '',
        city: 'Denver',
        state: 'CO',
        zipcode: '80204',
        chief_complaint: values.symptoms,
        patient_attributes: {
          first_name: values.firstName,
          last_name: values.lastName,
          mobile_number: values.cellPhone,
          patient_email: values.email,
        },
      },
    }

    await mutate(payload)
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

  const [mutate, { isLoading }] = useMutation(mutateFunction, { onSuccess })

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

      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="I agree to DispatchHealth's Privacy Policy & Terms of Service"
          status={formik.values.acceptTerms ? 'checked' : 'unchecked'}
          onPress={handleCheckboxPress}
          style={styles.checkbox}
        />
        <HelperText
          style={styles.error}
          type="error"
          visible={!!(formik.touched.acceptTerms && formik.errors.acceptTerms)}
        >
          {formik.errors.acceptTerms}
        </HelperText>
      </View>

      <Button
        loading={isLoading}
        mode="contained"
        onPress={formik.handleSubmit}
      >
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
  checkboxContainer: {
    paddingBottom: 25,
  },
  checkbox: {
    flexDirection: 'row-reverse',
    justifyContent: Platform.OS === 'web' ? 'flex-end' : 'flex-start',
  },
  error: {
    position: 'absolute',
    bottom: 5,
  },
})
