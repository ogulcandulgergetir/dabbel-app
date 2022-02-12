import { useState, useEffect } from "react";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import { Container, Row } from 'react-bootstrap';
import axios from "axios";


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItem();    
  }, []);

  const fetchItem = () => {
    axios
    .get('shopping_cart_items.json')
    .then(res => {
      let fetchedItems = res.data.shopping_cart_items
      addItem(fetchedItems);
    })
    .catch(err => {
      // itemFail(err);
    });    
  };

  const addItem = item => {
    const newItems = [...items,  ...item ];
    setItems(newItems);
  };

  // const increaseItemAmount = item => {
  //   const newItems = [...items,  ...item ];
  //   setItems(newItems);
  // };

  // const increaseItemAmount = item => {
  //   const newItems = [...items,  ...item ];
  //   setItems(newItems);
  // };

  // const removeItem = itemIndex => {
  //   const newTodos = [...todos];
  //   newTodos.splice(itemIndex, 1);
  //   setTodos(newTodos);
  // };


  return (
    <Container fluid className="App">
      <Row className="h-100">
        <Sidebar/>
        <Dashboard cartItems={items}/>  
      </Row>
    </Container>
  );
}

export default App;
