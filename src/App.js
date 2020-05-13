import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import EmployeeTable from "./components/Table";

function App() {
    return (
        <>
            <Container>
                <Jumbotron>
                    <h1 className="header">Employee Directory Using React!</h1>
                </Jumbotron>
            </Container>
            <EmployeeTable />
        </>
    );
}

export default App;
