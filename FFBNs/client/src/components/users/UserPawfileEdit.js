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
        displayName: "",
        email: "",
        avatar: undefined,
        interests: undefined


    });

    useEffect(()=>{
        getUserById(CurrentUserId)
        .then(r=>setUserPawfile(r))
    }, []);

    const handleSave = (e) => {
        e.preventDefault();

        const editedUserPawFile = {
            id: userPawfile.id,
            displayName: userPawfile.displayName,
            email: userPawfile.email,
            avatar: userPawfile.avatar,
            interests: userPawfile.interests,
        };
        console.log(editedUserPawFile)
        UpdateDog(editedUserPawFile).then(() => {
            // console.log("success!!!!!")
            navigate("/");
        })
       
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
                        <Label for="displayName">PawFileName</Label>
                        <Input type="text" name="displayName" value={userPawfile.displayName}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.displayName = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
               
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" required value={userPawfile.email}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.email = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="avatar">PawFile Picture</Label>
                        <Input type="text" name="avatar" required value={userPawfile.avatar}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.avatar = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="interests">Interests</Label>
                        <Input type="text" name="interests" required value={userPawfile.interests}
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
