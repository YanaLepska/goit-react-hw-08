import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";


const initialState = {
  name: "",
  email: "",
  password: "",
};

const registerSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Name is too Short!")
    .max(50, "Name is too Long!"),
  email: Yup.string().required("Required").email("Enter a valid email"),
  password: Yup.string()
    .required("Required")
    .min(7, "Password is too Short!")
    .max(50, "Password is too Long!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
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
        <label>
          <br />
          <br />
          <span>Name:</span>
          <br />
          <Field className={css.inputData} type="text" name="name" />
          <br />
          <ErrorMessage
            className={css.message}
            component="span"
            name="name"
          ></ErrorMessage>
        </label>
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
        <button className={css.registerBtn} type="submit">
          Registration  🚀
        </button>
      </Form>

    </Formik>
  );
};

export default RegistrationForm;
