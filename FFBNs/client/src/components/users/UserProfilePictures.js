import React, {useState} from "react";




function UserProfilePictures() {

    const uploadImage = (files) => {
        console.log(files [0]);
    }
    return (
    <>
    <div>
        <input type="file" onChange={(event)=> {uploadImage(event.target.files)}}/>

    </div>
    </>
    );
};

export default UserProfilePictures




// cPawFilePics