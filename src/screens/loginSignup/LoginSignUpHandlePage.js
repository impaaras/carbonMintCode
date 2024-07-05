import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const LoginSignUpHandlePage = () => {
    const [showLoginPage, setShowLoginPage] = useState(true)
  return showLoginPage ? <Login setShowLoginPage={setShowLoginPage} /> : <Signup setShowLoginPage={setShowLoginPage} />
}

export default LoginSignUpHandlePage