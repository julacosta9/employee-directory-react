import React from "react";

function TableRow(props) {
    return (

            <tr>
                <td>{props.id}</td>
                <td>
                    <img
                        src={props.picture}
                        alt={`Headshot of ${props.firstName} ${props.lastName}`}
                    />
                </td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.username}</td>
            </tr>
    );
}

export default TableRow;
