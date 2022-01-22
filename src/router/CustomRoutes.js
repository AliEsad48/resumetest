import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "../components/LoginForm"

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<div>Merhaba</div>} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default CustomRoutes
