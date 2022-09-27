import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets } from '../contexts/BudgetsContext'

export default function AddExpenseModal({show, handleClose, defaultBudgetId}) {

    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const {addExpense, budgets} = useBudgets()

    function handleSubmit(e){
        e.preventDefault()
            addExpense(
            {
                description: descriptionRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId: budgetIdRef.current.value
        })

        handleClose()
    }

 return (
    <Modal show = {show} onHide = {handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
            <Modal.Title>New expense</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type = "text" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximum spending limit</Form.Label>
                    <Form.Control ref={maxRef} type = "number" required min={0} step={0.01}/>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant="outline-primary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
