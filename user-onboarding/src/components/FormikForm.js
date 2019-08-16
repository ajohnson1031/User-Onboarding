import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({ errors }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" />
      <Field type="text" name="email" placeholder="E-mail" />
      <Field type="password" name="password" placeholder="Password" />
      <label>
        Terms of Service
        <Field type="checkbox" name="terms" />
      </label>
      <Field component="button" type="submit" name="submitBtn">
        Submit
      </Field>
      {errors && (
        <div className="errors">
          <ul>
            {Object.values(errors).map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
        </div>
      )}
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    terms: Yup.boolean().oneOf([true], "terms of service must be checked")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(UserForm);

export default FormikForm;
