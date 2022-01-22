import React, { useEffect, useState } from "react"
import { Form, Button, Card, Spinner } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { useNavigate, Link } from "react-router-dom"

const LoginForm = ({ isUserLogin, setIsUserLogin }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password").min(6),
  })

  const onSubmit = () => {
    navigate("/home")
    setIsUserLogin(true)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  useEffect(() => {
    if (isUserLogin) {
      navigate("/home")
    }
  }, [10])

  return (
    <Card className="m-auto">
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...formik.getFieldProps("email")}
              isInvalid={!!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...formik.getFieldProps("password")}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button variant="primary" type="submit" disabled={loading}>
              {loading && <Spinner animation="border" size="sm" />} Login
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginForm
