import { Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = () => {
  const initialValues = {
    id: nanoid(),
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className={s.form}>
        <div className={s.label_wrapper}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            placeholder="Enter Name"
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
        </div>
        <div className={s.label_wrapper}>
          <label className={s.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            placeholder="Enter Number"
            className={s.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
        </div>
        <button className={s.btn_submite} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
