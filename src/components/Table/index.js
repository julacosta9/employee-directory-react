import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import API from "../../util/api.js";

function EmployeeTable() {
    const [tableState, setTableState] = useState([]);

    useEffect(() => {
        API.getAllEmployees()
            .then((res) => {
                setTableState(res.data.results);
            })
    }, []);

    const handleSort = () => {
        let sortedTable = tableState;
        
        sortedTable.sort((a, b) => {
            if (a.name.first > b.name.first) {
                return 1;
            }
            else {
                return -1
            }
        })

        setTableState(...sortedTable);
        console.log(tableState)
    }

    return (
        <Container>
            <Table striped bordered hover>
                <TableHead handleSort={handleSort} onClick={e => alert("asdf")}/>
                <tbody>
                    {tableState.map((item, index) => (
                        <TableRow id={index+1} firstName={item.name.first} lastName={item.name.last} username={item.login.username} email={item.email} picture={item.picture.thumbnail} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default EmployeeTable;
