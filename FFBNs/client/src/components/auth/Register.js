import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { register } from "../../Managers/UserProfileManager";


export default function Register({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [DisplayName, setDisplayName] = useState();
  const [Email, setEmail] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    // if (password && password !== confirmPassword) {
    //   alert("Passwords don't match. Do better.");
    // } else {
      const userProfile = { DisplayName, Email };
      register(userProfile)
        .then(() => {
          setIsLoggedIn(true)
          navigate('/')
        });
    }
  };

  return (
    <div className="m-5">
      <Form onSubmit={registerClick}>
        <fieldset>
          <FormGroup>
            <Label htmlFor="DisplayName">PawFile Name</Label>
            <Input id="DisplayName" type="text" onChange={e => setDisplayName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Email">Email</Label>
            <Input id="Email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button>Register</Button>
          </FormGroup>
        </fieldset>
      </Form>
    </div>
  );
