import React from "react";
import Form from "react-bootstrap/Form"

function SearchField(props) {
    return (
        <Form.Group>
            <Form.Control
                onChange={props.handleSearchInput}
                type="text"
                placeholder="Search..."
            />
        </Form.Group>
    );
}

export default SearchField;
