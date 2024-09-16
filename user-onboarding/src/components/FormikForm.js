import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Container, Card, Image } from "semantic-ui-react";
import * as Yup from "yup";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import Characters from "../Characters";

const UserForm = ({
  errors,
  status,
  values,
  userCount,
  setFieldValue,
  isSubmitting
}) => {
  const [users, setUsers] = useState([]);
  const [char, setChar] = useState("");

  useEffect(() => {
    status && setUsers([...users, status]);
    userCount[1](userCount[0]++);
  }, [status, users, userCount]);

  const handleBlur = e => {
    setChar(Characters.filter(c => c.personality === values.personality));
  };

  const getRandomColor = () => {
    var letters = "BCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  return (
    <Container className="main-container">
      <div className="form-holder">
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="text" name="email" placeholder="E-mail" />
          <Field type="password" name="password" placeholder="Password" />
          <Field
            component="select"
            name="personality"
            onBlur={e => handleBlur(e)}
          >
            <option value="">Select your personality...</option>
            <option value="sarcastic">Sarcastic</option>
            <option value="heroic">Heroic</option>
            <option value="angry">Angry</option>
            <option value="fighter">Fighter</option>
          </Field>
          <label className="check">
            <span>Terms of Service</span>
            <Field type="checkbox" name="terms" checked={values.terms} />
            <div className="box" />
          </label>
          <Field type="hidden" value name="img" />
          <Field type="hidden" value name="nickname" />
          <Field type="hidden" value name="powers" />
          <Field
            component="button"
            type="submit"
            name="submitBtn"
            onClick={() => {
              console.log(char);
              let thisChar = char[Math.floor(Math.random() * char.length)];
              setFieldValue("img", thisChar.img);
              setFieldValue("nickname", thisChar.nickname);
              setFieldValue("powers", thisChar.powers);
            }}
            disabled={isSubmitting}
          >
            Submit
          </Field>
          {errors && Object.keys(errors).length > 0 && (
            <div className="errors">
              <ul>
                {Object.values(errors).map((error, i) => {
                  return <li key={i}>{error}</li>;
                })}
              </ul>
            </div>
          )}
        </Form>
      </div>

      <div className="results-holder">
        {users.map((user, i) => (
          <Card key={i}>
            <Image src={user.img} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span>Nickname: '{user.nickname}'</span>
                <br />
                <span>
                  Personality:{" "}
                  {user.personality[0].toUpperCase() +
                    user.personality.substr(1)}
                </span>
              </Card.Meta>
              <Card.Description>
                <strong>
                  <p className="powers-header">Powers</p>
                </strong>
                <ul className="powers-list">
                  {user.powers.map((power, i) => (
                    <li key={i}>{power}</li>
                  ))}
                </ul>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Container>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({
    name,
    email,
    password,
    terms,
    personality,
    img,
    nickname,
    powers
  }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false,
      personality: personality || "",
      img: img,
      nickname: nickname,
      powers: powers
    };
  },
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    terms: Yup.boolean().oneOf([true], "terms of service must be checked"),
    personality: Yup.string().required()
  }),
  handleSubmit(values, { resetForm, setErrors, setStatus }) {
    values.email === "waffle@syrup.com"
      ? setErrors({ email: "That email is already taken" })
      : axios
          .post("https://reqres.in/api/users", values)
          .then(res => {
            // console.log(res);
            console.log(values);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log(err));
  }
})(UserForm);

export default FormikForm;
