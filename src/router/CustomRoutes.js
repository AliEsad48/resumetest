import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import HomePage from "../pages/HomePage"

const CustomRoutes = ({ isUserLogin, setIsUserLogin }) => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HomePage isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />
        }
      />
      <Route
        path="/"
        element={
          <LoginForm
            isUserLogin={isUserLogin}
            setIsUserLogin={setIsUserLogin}
          />
        }
      />
    </Routes>
  )
}

export default CustomRoutes
