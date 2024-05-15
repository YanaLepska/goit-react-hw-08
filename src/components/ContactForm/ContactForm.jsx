import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialState = {
  name: "",
  number: "",
}

const contactSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Name is too Short!")
    .max(50, "Name is too Long!"),
  number:Yup.string()
    .required("Required")
    .min(3, "Number is too Short!")
    .max(50, "Number is too Long!")
  .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Invalid phone number format (000-00-00)"
      ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = {...values};
    dispatch(addContact(finalContact));
    actions.resetForm();
}
 
  return (
    <Formik initialValues={initialState} validationSchema={contactSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          <span>Name:</span>
          <br />
          <Field className={css.inputData} type="text" name="name" />
          <br />
          <ErrorMessage className={css.message} component='span' name="name"></ErrorMessage>
        </label>
        <label>
          <br />
          <span>Number:</span>
          <br />
          <Field className={css.inputData} type="tel" name="number" />
          <br />
          <ErrorMessage className={css.message} component='span' name="number"></ErrorMessage>
       </label>
				<br />
        <button className={css.addBtn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm