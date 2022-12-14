import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label, Input, Form, } from "reactstrap";
import { UpdateDog, getCurrentUser,getUserById} from "../../managers/UserProfileManager";
import UserProfilePictures  from "./UserProfilePictures";


export const UserPawfileEdit = () => {
    const navigate = useNavigate ();
    const { id } = useParams (); ////local storage logged in user id instead of use params-  NEED TO FIX

    //load local user into state- 
// console.log(getCurrentUser)
    
  let localUserObject = localStorage.getItem("userProfile")
  console.log(localUserObject)
  let CurrentUserObject = JSON.parse(localUserObject)
  let CurrentUserId = CurrentUserObject.id;
  const [publicId, setPublicId] = useState("");

    const [userPawfile, setUserPawfile] = useState({
        id:0,
        displayName: "",
        email: "",
        avatar: "",
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
            avatar: publicId,
            interests: userPawfile.interests,
        };

        UpdateDog(editedUserPawFile).then(() => {
            // console.log("success!!!!!")
            localStorage.setItem("userProfile", JSON.stringify(editedUserPawFile))
            navigate("/CurrentUserPawFile");
        })
       
    };

    //I KNOW IT HAS SOMETHING TO DO WITH THIS.  IF I EDIT IT- it does save the edit but it doesnt load until after I reaload relog-  It has something to do with.. wait. it just went away?  ARRGH ive been trying to fix this error for 2 hours.... WHAAAAT--- LItterally as im typing it it fixes itself.  DANNGIT --- i need a break- no wait its back.  So  the change happens but it doesnt update on the PAWFIle until state changes and the dog is relogged..-im too tired to deal with.. make it pretty first and fix later.. it has something to do with state change though. 
    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/CurrentUserPawfile")
    };
//i need to be able to upload the pictures on the edit page. and save the value from the uploaded picture in the string attached to the sql fetch for PUT
    return (<>
        
        
        <section className="mx-5 mb-5 mt-3 ">
            <h3 >Edit </h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label className="welcomeTxt" for="displayName">PawFileName</Label>
                        <Input type="text" name="displayName" value={userPawfile.displayName}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.displayName = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
               
                    <FormGroup>
                        <Label className="welcomeTxt" for="email">Email</Label>
                        <Input type="text" name="email" required value={userPawfile.email}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.email = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>

                            {/* this is where I want to be!!! */}
                            {/* this is where I want to be!!! */}
                            {/* this is where I want to be!!! */}
                            {/* this is where I want to be!!! */}
                    <FormGroup>
                        <Label className="welcomeTxt" for="avatar">PawFile Picture</Label> 



                        <UserProfilePictures CurrentUserObject={(CurrentUserObject)} setPublicId={(setPublicId)} publicId={(publicId)} sendPublicIdToSQL={(publicId) => setUserPawfile({ ...userPawfile, avatar: publicId })} />
                    </FormGroup>


                    <FormGroup>
                        <Label className="welcomeTxt" for="interests">Interests</Label>
                        <Input type="text" name="interests" required value={userPawfile.interests}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.interests = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
                    <Button className="button mr-2, ralph">Save</Button>
                    <Button onClick={handleCancel} className="button, ">Cancel</Button>
                </Form>
            </div>
        </section>
    
        
        </>)

}
// you need a way of pulling in individual user profiles. you only have get@all and get@random- get by email is next




//export const getCurrentUserId = () => JSON.parse(localStorage.getItem('userProfile')).id;


/* old image upload 
 <FormGroup>
                        <Label for="avatar">PawFile Picture</Label>
                        <Input type="text" name="avatar" required value={userPawfile.avatar}
                        onChange={(e) => {
                            const PawFileCopy = { ...userPawfile };
                            PawFileCopy.avatar = e.target.value;
                            setUserPawfile(PawFileCopy);
                        }} />
                    </FormGroup>
*/