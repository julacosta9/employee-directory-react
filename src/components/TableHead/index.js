import React from "react";
import Button from "react-bootstrap/Button";

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>
                    ID
                    <Button name="id" onClick={props.handleSort}>
                        Sort
                    </Button>
                </th>
                <th>
                    Profile Picture
                </th>
                <th>
                    First Name
                    <Button name="firstName" onClick={props.handleSort}>
                        Sort
                    </Button>
                </th>
                <th>
                    Last Name
                    <Button name="lastName" onClick={props.handleSort}>Sort</Button>
                </th>
                <th>
                    Email
                    <Button name="email" onClick={props.handleSort}>Sort</Button>
                </th>
                <th>
                    Username
                    <Button name="username" onClick={props.handleSort}>Sort</Button>
                </th>
            </tr>
        </thead>
    );
}

export default TableHead;
