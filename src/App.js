import React from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './components/budgetCard'
function App() {
  return (
   <Container className="my-4">

    <Stack direction = "horizontal" gap = "2" className="mb-4">
      <h1 className="me-auto" >budgy<span role="img">📊</span></h1>
      <Button variant="success">Add Budget</Button>
      <Button variant="danger">Add Expense</Button>
    </Stack>

    <div style={{display:"grid", 
    gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
    gap:"1rem", 
    alignItems:"flex-start"
    }}>
    </div>
    <BudgetCard name = "Misc" gray amount ={100} max={1500}></BudgetCard>

   
   </Container>
  );
}

export default App;
