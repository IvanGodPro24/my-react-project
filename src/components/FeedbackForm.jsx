import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too Short!")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(actions);
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={messageFieldId}>Message</label>
          <Field as="textarea" name="message" id={messageFieldId}></Field>
          <ErrorMessage name="message" component="span"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={levelFieldId}>Level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
            <option value="good">Good</option>
          </Field>
          <ErrorMessage name="level" component="span"></ErrorMessage>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
