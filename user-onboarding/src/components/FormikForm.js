import React from "react";
import { withFormik, Form, Field } from "formik";

const UserForm = () => {
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
  }
})(UserForm);

export default FormikForm;
