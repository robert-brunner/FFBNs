import React from "react";
import { Link } from "react-router-dom";

export const UserProfileItem = ({ user }) => {
    return (

        <tr>
            <td>
                
                    <Link to={`users${user.id}`}>
                    </Link>
                    
                
            </td>
            <td>
                {user.userProfile?.displayName}
            </td>
        </tr>

    )
}

