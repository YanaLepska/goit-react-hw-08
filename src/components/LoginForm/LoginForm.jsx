import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const registerSchema = Yup.object({
  email: Yup.string().required("Required").email("Enter a valid email"),
  password: Yup.string()
    .required("Required")
    .min(7, "Password is too Short!")
    .max(50, "Password is too Long!"),
});


const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formTitle}>
          Let&rsquo;s connect constellations!</label>
          <br />
          <br />
        <label>
          <br />
          <span>Email:</span>
          <br />
          <Field className={css.inputData} type="email" name="email" />
          <br />
          <ErrorMessage
            className={css.message}
            component="span"
            name="email"
          ></ErrorMessage>
        </label>
        <br />
        <label>
          <span>Password:</span>
          <br />
          <Field className={css.inputData} type="password" name="password" />
          <br />
          <ErrorMessage
            className={css.message}
            component="span"
            name="password"
          ></ErrorMessage>
        </label>
        <br />
        <button className={css.loginBtn} type="submit">
          Go to account ✨
        </button>
      </Form>
    </Formik>
  )
}

export default LoginForm