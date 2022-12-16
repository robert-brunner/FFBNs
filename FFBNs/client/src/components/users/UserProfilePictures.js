import React, {useState} from "react";
import Axios from "axios";





function UserProfilePictures() {

    const [imageSelected, setImageSelected] = useState ("")

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "cPawFilePics")

        Axios.post("http://api.cloudinary.com/v1_1/dpwgvs3m0/image/upload", formData)
        .then((response)=>console.log(response))
    }
    return (
    <>
    <div>
        <input 
            type="file" onChange={(event)=> {
                setImageSelected(event.target.files[0]);
            }}
        />
        <button onClick={uploadImage}>UploadImage</button>
    </div>
    </>
    );
};

export default UserProfilePictures




// cPawFilePics