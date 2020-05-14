import React from "react";
import Button from "react-bootstrap/Button"

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Profile Picture</th>
                <th>
                    First Name
                    <Button onClick={props.handleSort}>Sort</Button>
                </th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Username</th>
            </tr>
        </thead>
    );
}

export default TableHead;
