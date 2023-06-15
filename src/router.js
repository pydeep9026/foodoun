import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaymentPage from './components/payment'
import App from './App'
import Login from './login'

function router() {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
  <Route path="/payment" element={<PaymentPage/>} />
  <Route path="/login" element={<Login/>} />
</Routes>
  )
}

export default router