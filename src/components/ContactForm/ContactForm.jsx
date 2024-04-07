import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = ({  }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Must be only digits and hyphen")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

   const dispatch = useDispatch();
   const handleSubmit = (data, actions) => {
     dispatch(addContact({ id: nanoid(), ...data }));
     actions.resetForm();
   };

  return (
    <div>
      <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForm}>
          <label className={css.formLabel}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage className={css.Error} name="name" component="div" />
          </label>

          <label className={css.formLabel}>
            <span>Number</span>
            <Field type="tel" name="number" />
            <ErrorMessage className={css.Error} name="number" component="div" />
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
