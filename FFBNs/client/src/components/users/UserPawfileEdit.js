import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label, Input, Form, } from "reactstrap";
import { getCurrentUser } from "../../managers/UserProfileManager";


export const UserPawfileEdit = () => {
    const navigate = useNavigate ();
    const { id } = useParams (); ////local storage logged in user id instead of use params-  NEED TO FIX

    const [userPawfile, setUserPawfile] = useState({
        id:0,
        DisplayName: "",
        Email: "",
        Avatar: "",
        Interests: "",

    });

    const getCurrentUser = () => {
        getCurrentUser(id),then(p =>{
            setUserPawfile(p);
        })
    };
    useEffect(()=>{
        getCurrentUser();
    })

    const handleSave = (e) => {
        e.preventDefault();

        const editedUserPawFile = {
            id: userPawfile.id,
            DisplayName: userPawfile.DisplayName,
            Email: userPawfile.Email,
            Avatar: userPawfile.Avatar,
            Interests: userPawfile.Interests,
        };
        console.log(editedUserPawFile)
        navigate("/user");
    };

    return (<>
        
        
        <section className="mx-5 mb-5 mt-3 ">
            <h3>Edit User Type For : {userPawfile.DisplayName}</h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave} >
                    <FormGroup>
                            <Input type="select" name="userType" defaultValue="none" required value={userPawfile.userTypeId}
                            onChange={(e) => {
                                const userPawfileCopy = { ...userPawfile };
                                userPawfileCopy.userTypeId = e.target.value;
                                setuserPawfile(userPawfileCopy);
                            }}>
                                <option value="none" disabled hidden>Select a User Type</option>
                                {userTypes.map((userType) => (
                                    <option key={userType.id} value={userType.id}>{userType.name}</option>
                                ))}
                            </Input>        
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={() => navigate(`/users`)} >Cancel</Button>
                </Form>
            </div>
        </section>
    
        
        </>)

}
// you need a way of pulling in individual user profiles. you only have get@all and get@random- get by email is next