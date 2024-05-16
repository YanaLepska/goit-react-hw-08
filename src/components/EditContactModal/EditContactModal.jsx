import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./EditContactModal.module.css";
import { IoMdClose } from "react-icons/io";

const EditContactModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(editContact({ id: contact.id, ...values }));
    onClose();
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Name is too Short!")
      .max(50, "Name is too Long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Number is too Short!")
      .max(50, "Number is too Long!")
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Invalid phone number format (000-00-00)"
      ),
  });

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>
          <IoMdClose size={25} />
        </span>
        <Formik
          initialValues={{
            name: contact.name,
            number: contact.number,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <label className={css.label}>Name:</label>
              <Field type="text" name="name" className={css.inputData} />
              <ErrorMessage
                name="name"
                component="span"
                className={css.message}
              />
              <label className={css.label}>Number:</label>
              <Field type="text" name="number" className={css.inputData} />
              <ErrorMessage
                name="number"
                component="span"
                className={css.message}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditContactModal;
