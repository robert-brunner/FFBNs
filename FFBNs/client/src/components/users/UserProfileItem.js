import React from "react";
import { Link } from "react-router-dom";

export const UserProfileItem = ({ paw, isMy }) => {
    return (

        <tr>
            <td>
                {isMy ?
                    <Link to={`/my-posts/${paw.id}`}>
                        {paw.title}
                    </Link>
                    :
                    <Link to={`/posts/${paw.id}`}>
                        {paw.title}
                    </Link>
                }
            </td>
            <td>
                {paw.userProfile.displayName}
            </td>
            <td>
                {paw.category.name}
            </td>
        </tr>

    )
}

