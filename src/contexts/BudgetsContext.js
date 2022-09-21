import React, { useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"
const BudgetsContext = React.createContext()

export function useBudgets(){

    return useContext(BudgetsContext)
}

// {//budget array
//     id:
//     name:
//     max:
// }

// {//expenses
//     id:
//     budgetID:
//     amount:
//     descrp:
// }


export const BudgetsProvider = ({children})=>{
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

    //get Budget Expenses
    function getBudgetExpenses(budgetID){

        return expenses.filter(expense=>expense.budgetID===budgetID)
    }
    
    //add Expenses
    function addExpenses({description,amount,budgetID}){
        setExpenses(prevExpenses=>{
            
            return [...prevExpenses, {id: uuidV4(), description, amount, budgetID}]
        })
    }

    //add Budget
    function addBudget({name, max}){
        setBudgets(prevBudgets=>{
            if(prevBudgets.find(budget=>budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }

    //delete Budget
    function deleteBudget({id}){
        setBudgets(prevBudgets=>{
            return prevBudgets.filter(budget=>budget.id!==id)
        })
    }

    //delete Expense
    function deleteExpense({id}){
        setExpenses(prevExpenses=>{
            return prevExpenses.filter(expenses=>expenses.id!==id)
        })
    }
    
    
    return ( 
    <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense,
    }}>
        {children}
    </BudgetsContext.Provider>
    )
}