import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import API from "../../util/api.js";

function EmployeeTable() {
    let tableRows;
    const [tableState, setTableState] = useState([]);
    console.log("setupInit: ", tableState);

    useEffect(() => {
        API.getAllEmployees()
            .then((res) => {
                console.log("Employee Data", res.data);
                setTableState(res.data);
                return res.data;
            })
    }, []);

    return (
        <Container>
            <Table striped bordered hover>
                <TableHead />
                <tbody>
                    {tableState.map((item) => (
                        <TableRow id={item.id} name={item.name} username={item.username} email={item.email} phone={item.phone} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default EmployeeTable;
