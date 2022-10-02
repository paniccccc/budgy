import React, { useState } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import AddBudgetModal from './components/addBudgetModal';
import AddExpenseModal from './components/addExpenseModal';
import BudgetCard from './components/budgetCard'
import { useBudgets } from './contexts/BudgetsContext';

function App() {
  
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [AddExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const {budgets, getBudgetExpenses} = useBudgets()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }
  
  return (
    <>
   <Container className="my-4">

    <Stack direction = "horizontal" gap = "2" className="mb-4">
      <h1 className="me-auto" >budgy<span role="img" aria-label='graph'>📊</span></h1>
      <Button variant="success" onClick={()=> setShowAddBudgetModal(true)}>Add Budget</Button>
      <Button variant="danger" onClick={openAddExpenseModal}>Add Expense</Button>
    </Stack>

    <div style={{display:"grid", 
    gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
    gap:"1rem", 
    alignItems:"flex-start"
    }}>
    </div>

    {budgets.map(budget=>{
      
      const amount = getBudgetExpenses(budget.id).reduce((total,expense)=>total + expense.amount, 0)

      return(
      <BudgetCard 
        key={budget.id}
        name = {budget.name} 
        amount = {amount} 
        max = {budget.max}
        openAddExpenseClick={()=>openAddExpenseModal(budget.id)}
      />
      )})}

   </Container>
   <AddBudgetModal show={showAddBudgetModal} handleClose={()=>
    setShowAddBudgetModal(false)}/>

    <AddExpenseModal show={showAddExpenseModal} handleClose={()=>
    setShowAddExpenseModal(false)}/>
    </>
   )
}

export default App;
