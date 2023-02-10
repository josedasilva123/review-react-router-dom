import React from 'react'
import RegisterForm from '../../components/RegisterForm'

const RegisterPage = ({registerUser}) => {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <RegisterForm registerUser={registerUser} />
    </div>
  )
}

export default RegisterPage