import React from "react";
import Button from "react-bootstrap/Button";

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Profile Picture
                </th>
                <th>
                    First Name{' '}
                    <Button name="firstName" size="sm" onClick={props.handleSort}>
                        ▲
                    </Button>
                </th>
                <th>
                    Last Name{' '}
                    <Button name="lastName" size="sm" onClick={props.handleSort}>▲</Button>
                </th>
                <th>
                    Email{' '}
                    <Button name="email" size="sm" onClick={props.handleSort}>▲</Button>
                </th>
                <th>
                    Username{' '}
                    <Button name="username" size="sm" onClick={props.handleSort}>▲</Button>
                </th>
            </tr>
        </thead>
    );
}

export default TableHead;
