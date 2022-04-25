import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";

const AuthForm = ({ handleSubmit, handleChange, auth, buttonName }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <Form id="authForm">
      <Form.Group className="mb-4 mt-5 form-inputs" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          // className=""
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group className="mb-2 form-inputs" controlId="">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="password"
          type={passwordShow ? "text" : "password"}
          placeholder="Enter Password"
          defaultValue={auth.password}
        />
      </Form.Group>
      <Form.Group className="mb-5 form-checkbox" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Show Password"
          onClick={() => setPasswordShow(!passwordShow)}
        />
      </Form.Group>
      <button
        className="mt-4 form-button"
        onClick={(event) => {
          handleSubmit(event);
          document.getElementById("authForm").reset();
        }}
      >
        {buttonName} <BsArrowRightShort />
      </button>
    </Form>
  );
};

export default AuthForm;
