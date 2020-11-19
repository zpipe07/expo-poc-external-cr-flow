import React from 'react'
import { Headline, Subheading } from 'react-native-paper'

import Screen from '../components/Screen'

const CompleteScreen = () => {
  return (
    <Screen>
      <Headline>We’ll call you to confirm your appointment.</Headline>

      <Subheading>
        We do our best to reach out within 2-3 minutes. If this is an emergency,
        please call 911.
      </Subheading>
    </Screen>
  )
}

export default CompleteScreen
