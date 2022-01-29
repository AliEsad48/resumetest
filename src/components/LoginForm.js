import { Form, Button, Row, Container, Col } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { login, requestToken } from "../api/login_service"
import { toast } from "react-toastify"

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
    <Container className="mt-5">
      <Row style={{ justifyContent: "center" }}>
        <Col md="4" className="bg-warning" style={{ borderRadius: "5px" }}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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

            <Button className="mb-3" variant="danger" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
