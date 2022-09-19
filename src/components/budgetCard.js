import React from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currFormatter } from "../utils";
export default function BudgetCard({name, amount, max, gray}) {


  const classNames=[]
  
  if(amount > max){
      classNames.push("bg-danger","bg-opacity-10")
    }
  else if(gray){
    classNames.push("bg-gray","bg-opacity-10")
  }
  
  return (
  <Card className={classNames.join(" ")}>
    <Card.Body>
        <Card.Title className="d-flex jusitfy-content-between 
        align-items-baseline fw-normal mb-3">
            <div className="me-2">{name}</div>
            <div className="d-flex align-items-baseline">{currFormatter.format(amount)}
            <span className="text-muted fs-6">/{currFormatter.format(max)}</span>
            </div>
        </Card.Title>
        <ProgressBar className="rounded-pill" variant={getProgbarvariant(amount,max)}
        min={0}
        max={max}
        now={amount}/>

        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button variant="outline-danger ms-auto">Add Expenses</Button>
          <Button variant="outline-dark">View Expenses</Button>
        </Stack>
    </Card.Body>
  </Card>
  )
}

function getProgbarvariant(amount, max){
  const ratio = amount/max
  if(ratio<0.5) return "success"
  if(ratio<0.75) return "warning"
  
  return "danger"
}
