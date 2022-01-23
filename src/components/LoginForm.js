import { Form, Button, Card } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { login, requestToken } from "../api/login_service"

const LoginForm = () => {
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your user name"),
    password: Yup.string().required("Please enter your password").min(6),
  })

  const onSubmit = (values) => {
    requestToken().then((resp) => {
      values["request_token"] = `${resp.data.request_token}`
      console.log(values)
      login(values).then((response) => {
        localStorage.setItem("token", resp.data.request_token)
        console.log("login başladı")
        navigate("/home")
      })
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <Card className="m-auto">
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("username")}
              isInvalid={!!formik.errors.username}
              autoFocus="autofocus"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
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
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginForm
