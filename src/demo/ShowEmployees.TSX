import React from 'react'
import { Employees } from './EmployeesData'

const ShowEmployees = ({props}) => {
    
  return (
    <>
    <h4>Employees List at our company</h4>
    <table>
        
        {props.map((employee, index)=> (
        <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.id}</td>
        </tr>
        ))}
    </table>

    </>
  )
}

export default ShowEmployees