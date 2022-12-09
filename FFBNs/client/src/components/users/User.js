import React from "react";

export const User =({user}) => {
    return (
        <tr>
            <td scope="row">
            {user.name}
            </td>
        </tr>
    )
}
