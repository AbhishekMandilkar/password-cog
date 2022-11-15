import { useRoute } from '@react-navigation/native'
import React from 'react'
import Container from '../common/Container'
import AddOrUpdatePassword from '../components/AddOrUpdatePassword/AddOrUpdatePassword'

const AddPasswordScreen = () => {
  
  return (
    <Container>
        <AddOrUpdatePassword/>
    </Container>
  )
}

export default AddPasswordScreen