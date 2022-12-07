import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../managers/UserProfileManager";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [Email, setEmail] = useState();
//   const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({ Email})
      .then(r => {
        console.log(r)
        // if (r.isActive == 0){  //conditional to prevent deactivated users from entering the application, stop here at the alert
        //   alert("Your account has been deactivated, contact admin for support.")
          
        // }
        // else 
        if (r) {  //if a user is active hit here and navigate into application
        //   setIsLoggedIn(true)
          navigate('/')
        }
        else { //invalid Email or password will hit here
          alert("Invalid Email")
        }
      })
  };

  return (
    <div className="m-5">
      <Form onSubmit={loginSubmit}>
        <fieldset>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input id="Email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          {/* <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </FormGroup> */}
          <FormGroup>
            <Button>Go Fetch!</Button>
          </FormGroup>
          <em>
            Not registered? <Link to="/register">Register</Link>
          </em>
        </fieldset>
      </Form>
    </div>
  );
}