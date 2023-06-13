import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        setNameErr(
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Min. Length is 3 characters"
            : null
        );
        break;
      case "email":
        setEmail(e.target.value);
        setEmailErr(
          e.target.value.length === 0
            ? "This field is required"
            : !/([a-zA-Z0-9])@[a-zA-Z0-9]+\.[a-z]/.test(email)
            ? "Please insert a vaild email"
            : null
        );
        break;

      case "userName":
        setUserName(e.target.value);
        setUserNameErr(
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.includes(" ")
            ? "this field can't have spaces"
            : null
        );
        break;
      case "password":
        setPassword(e.target.value);
        setPasswordErr(
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Min. Length is 3 characters"
            : null
        );
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        console.log(password, e.target.value);
        setConfirmPasswordErr(
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Min. Length is 3 characters"
            : confirmPassword !== password
            ? "password doesn't match"
            : null
        );
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        {nameErr && <small className="text-danger">{nameErr}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        {emailErr && <small className="text-danger">{emailErr}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter your user Name"
          value={userName}
          onChange={(e) => handleChange(e)}
        />
        {userNameErr && <small className="text-danger">{userNameErr}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        {passwordErr && <small className="text-danger">{passwordErr}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Enter your password"
          value={confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        {confirmPasswordErr && (
          <small className="text-danger">{confirmPasswordErr}</small>
        )}
      </div>
      <button className="btn btn-success" type="submit">
        Register
      </button>
    </form>
  );
}
