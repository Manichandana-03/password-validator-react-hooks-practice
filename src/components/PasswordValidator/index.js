// Write your code here
import {useState} from 'react'

import {
  BackgroundContainer,
  CardContainer,
  Heading,
  Description,
  InputField,
  Warning,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMsg = password.length < 8
  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  return (
    <BackgroundContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputField type="password" onChange={onChangeInput} value={password} />

        {showErrorMsg && (
          <Warning>Your password must be at least 8 characters</Warning>
        )}
      </CardContainer>
    </BackgroundContainer>
  )
}

export default PasswordValidator
