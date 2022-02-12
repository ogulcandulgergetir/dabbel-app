import React, { useEffect } from "react";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import { Container, Row } from 'react-bootstrap';


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);


  return (
    <Container fluid className="App">
      <Row className="h-100">
        <Sidebar/>
        <Dashboard/>      
      </Row>
    </Container>
  );
}

export default App;
