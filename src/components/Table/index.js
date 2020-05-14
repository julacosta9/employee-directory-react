import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SearchField from "../SearchField"
import Table from "react-bootstrap/Table";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import API from "../../util/api.js";
import Sort from "../../util/sortFunctions.js"

function EmployeeTable() {
    const [tableState, setTableState] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [sortState, setSortState] = useState({
        isFirstNameSorted: false,
        isLastNameSorted: false,
        isEmailSorted: false,
        isUsernameSorted: false
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
            case "firstName":
                Sort.byFirstName(sortedTable, sortState.isFirstNameSorted);
                setSortState({
                    isFirstNameSorted: !sortState.isFirstNameSorted,
                    isLastNameSorted: false,
                    isEmailSorted: false,
                    isUsernameSorted: false
                })
                break;

            case "lastName":
                Sort.byLastName(sortedTable, sortState.isLastNameSorted);
                setSortState({
                    isFirstNameSorted: false,
                    isLastNameSorted: !sortState.isLastNameSorted,
                    isEmailSorted: false,
                    isUsernameSorted: false
                })
                break;

            case "email":
                Sort.byEmail(sortedTable, sortState.isEmailSorted);
                setSortState({
                    isFirstNameSorted: false,
                    isLastNameSorted: false,
                    isEmailSorted: !sortState.isEmailSorted,
                    isUsernameSorted: false
                })
                break;

            case "username":
                Sort.byUsername(sortedTable, sortState.isUsernameSorted);
                setSortState({
                    isFirstNameSorted: false,
                    isLastNameSorted: false,
                    isEmailSorted: false,
                    isUsernameSorted: !sortState.isUsernameSorted
                })    
                break;

            default:
                console.log(`The following button name was not found: ${buttonName}`)
                break;
        }

        setTableState([...sortedTable]);
    }

    const handleSearchInput = (event) => {
        setSearchState(event.target.value.toLowerCase())
    }

    return (
        <Container>
            <SearchField handleSearchInput={handleSearchInput} />
            <Table striped bordered hover>
                <TableHead handleSort={handleSort} />
                <tbody>
                    {searchState
                    ? tableState.filter(item => 
                        item.name.first.toLowerCase().includes(searchState)
                        || item.name.last.toLowerCase().includes(searchState)
                        || item.email.toLowerCase().includes(searchState)
                        || item.login.username.toLowerCase().includes(searchState))
                        .map((item, index) => (
                            <TableRow id={index+1} firstName={item.name.first} lastName={item.name.last} username={item.login.username} email={item.email} picture={item.picture.thumbnail} />
                        ))
                    : tableState.map((item, index) => (
                        <TableRow id={index+1} firstName={item.name.first} lastName={item.name.last} username={item.login.username} email={item.email} picture={item.picture.thumbnail} />
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default EmployeeTable;
