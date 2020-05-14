import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import API from "../../util/api.js";
import Sort from "../../util/sortFunctions.js"

function EmployeeTable() {
    const [tableState, setTableState] = useState([]);
    const [sortState, setSortState] = useState({
        firstNameSorted: false,
        lastNameSorted: false
    });
    

    

    useEffect(() => {
        API.getAllEmployees()
            .then((res) => {
                setTableState(res.data.results);
            })
    }, []);

    const handleSort = (event) => {
        let sortedTable = tableState;
        let buttonName = event.target.name
    
        switch (buttonName) {
            // case "id":
            //     sortByID(sortedTable);
            //     break;

            case "firstName":
                Sort.byFirstName(sortedTable, sortState.firstNameSorted);
                setSortState({
                    firstNameSorted: !sortState.firstNameSorted,
                    lastNameSorted: false
                })
                break;

            case "lastName":
                Sort.byLastName(sortedTable, sortState.lastNameSorted);
                setSortState({
                    firstNameSorted: false,
                    lastNameSorted: !sortState.lastNameSorted
                })
                break;

            // case "email":
            //     sortByEmail(sortedTable);
            //     break;

            // case "username":
            //     sortByUsername(sortedTable);
            //     break;
        }

        setTableState([...sortedTable]);
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
