import React from "react";
import { Link } from "react-router-dom";

export const MatchItem = ({ user }) => {
    console.log(user)
    return (

        <tr>
            <td>
                
                    <Link to={`users${user.id}`}>
                    </Link>
                    
                
            </td>
            <td>
                {user.displayName}
            </td>
        </tr>

    )
}

