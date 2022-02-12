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

  const increaseItemAmount = itemIndex => {
    const newItems = [...items];
    newItems[itemIndex].count++
    setItems(newItems);
  };

  const decreaseItemAmount = itemIndex => {
    const newItems = [...items];
    newItems[itemIndex].count-- 
    if (newItems[itemIndex].count === 0) {
      setItems(removeItem(itemIndex, newItems))
    }
    setItems(newItems);
  };

  const removeItem = (itemIndex, newItems) => {
    newItems.splice(itemIndex, 1);
    return newItems;
  };

  const deleteItem = (itemIndex) => {
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  };


  return (
    <Container fluid className="App">
      <Row className="h-100">
        <Sidebar/>
        <Dashboard cartItems={items} onDecrease={decreaseItemAmount} onIncrease={increaseItemAmount} onRemove={deleteItem}/>  
      </Row>
    </Container>
  );
}

export default App;
