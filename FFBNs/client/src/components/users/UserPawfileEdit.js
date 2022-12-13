import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label, Input, Form, } from "reactstrap";
import { UpdateDog, getCurrentUser,getUserById} from "../../managers/UserProfileManager";


export const UserPawfileEdit = () => {
    const navigate = useNavigate ();
    const { id } = useParams (); ////local storage logged in user id instead of use params-  NEED TO FIX

    //load local user into state- 
// console.log(getCurrentUser)
    
  const localUserObject = localStorage.getItem("userProfile")
  console.log(localUserObject)
  const CurrentUserObject = JSON.parse(localUserObject)
  const CurrentUserId = CurrentUserObject.id;

    const [userPawfile, setUserPawfile] = useState({
        id:0,
        DisplayName: "",
        Email: "",
        Avatar: undefined,
        Interests: undefined


    });


   

    const getSingleUser = () => {
        UpdateDog(CurrentUserId).then(p =>{
            setUserPawfile(p);
        })
    };
    useEffect(()=>{
        getUserById(CurrentUserId)
        .then(r=>setUserPawfile(r))
    }, []);

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
        navigate("/CurrentUserPawfile");
    };
    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/CurrentUserPawfile")
    };

    return (<>
        
        
        <section className="mx-5 mb-5 mt-3 ">
            <h3>Edit Post</h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label for="DisplayName">PawFileName</Label>
                        <Input type="text" name="DisplayName" value={userPawfile.displayName}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.displayName = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={handleCancel} className="button">Cancel</Button>
                </Form>
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="text" name="Email" required value={userPawfile.email}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.email = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Avatar">PawFile Picture</Label>
                        <Input type="text" name="Avatar" required value={userPawfile.avatar}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.avatar = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Interests">Interests</Label>
                        <Input type="text" name="Interests" required value={userPawfile.interests}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.interests = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={handleCancel} className="button">Cancel</Button>
                </Form>
            </div>
        </section>
    
        
        </>)

}
// you need a way of pulling in individual user profiles. you only have get@all and get@random- get by email is next




//export const getCurrentUserId = () => JSON.parse(localStorage.getItem('userProfile')).id;
