import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { register } from "../../managers/UserProfileManager";
import { LoginSlider } from "../loginSlider/LSlider";


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
    
    return (
    <div className="m-5">
      <Form onSubmit={registerClick}>
        <fieldset>
          <FormGroup>
            <Label className="welcomeTxt" htmlFor="DisplayName">PawFile Name</Label>
            <Input id="DisplayName" type="text" onChange={e => setDisplayName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label className="welcomeTxt" htmlFor="Email">Email</Label>
            <Input id="Email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button className="ralph">Register</Button>
          </FormGroup>
        </fieldset>
      </Form>
      <LoginSlider classname="RSlider"/>
    </div>
  );
};
  
  