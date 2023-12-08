import { Employee } from "./Employee";
import { useEffect, useState } from "react";
import { Alert, Button, Title } from "@mantine/core";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { employeeDb } from "./firebaseconfig";
import UpdateEmployee from "./UpdateEmployee";
import React from "react";

const ShowEmployees = () => {
	const [showUpdate, setShowUpdate] = useState(false);
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [empData, setEmpData] = useState([""]);
	const [salary, setSalaryValue] = useState(0);
	//let employee: Employee;

	const handleDelete = async (id: string) => {
		try {
			const employeeDocRef = doc(employeeDb, "employee", id);
			await deleteDoc(employeeDocRef);
			console.log(`Employee with ID ${id} deleted successfully`);
			// Refresh the employee list after deletion
			const updatedEmployees = employees.filter((emp) => emp.id !== id);
			setEmployees(updatedEmployees);
		} catch (err) {
			console.error(err);
			console.log(id);
			setError(`There was an error deleting the employee with ID ${id} `);
		}
	};

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const employeesCollection = collection(employeeDb, "employee");
				const querySnapshot = await getDocs(employeesCollection);

				const fetchedEmployees: Employee[] = [];
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					const employee: Employee = {
						id: doc.id,
						name: data.Name,
						role: data.Role,
						salary: data.Salary,
						address: data.Address,
					};
					fetchedEmployees.push(employee);
				});

				setEmployees(fetchedEmployees);
			} catch (err) {
				console.error(err);
				setError("There was an error fetching employee data");
			}
		};

		fetchEmployees();
	}, []);

	const [editable, setEditable] = useState(false);

	if (editable) {
		return (
			<div className='ml-3'>
				<Title className='font-bold'>Employee List</Title>
				{error && <Alert>{error}</Alert>}
				<table className=''>
					<thead>
						<tr>
							<th>r/n</th>
							<th>Name</th>
							<th>role</th>
							<th>salary(ETB)</th>
							<th>address</th>
							<th>delete</th>
							<th>edit</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((emp) => (
							<tr key={emp.id}>
								<td></td>
								<td>{emp.name}</td>
								<td>{emp.role}</td>
								<td>{emp.salary}</td>
								<td>{emp.address}</td>
								<td>
									<button
										onClick={() => {
											console.log("delete");
											handleDelete(emp.id);
										}}
									>
										delete
									</button>
								</td>
								<td>
									<button
										className='bg-purple-400'
										onClick={() => {
											console.log("update button clicked!");
											setEmpData([emp.name, emp.id, emp.role, emp.address]);
											setSalaryValue(emp.salary);
											setShowUpdate(true);
										}}
									>
										update
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{!showUpdate && (
					<button
						className='bg-green-500 pt-0 mt-4 px-2 mr-1 shadow-md'
						onClick={() => {
							setEditable(false);
						}}
					>
						back
					</button>
				)}
				{showUpdate && (
					<>
						<UpdateEmployee
							id={empData[1]}
							name={empData[0]}
							role={empData[2]}
							address={empData[3]}
							salary={salary}
						/>
						<button
							className='bg-red-700 pt-0 mt-4 px-2 mr-1 shadow-md'
							onClick={() => {
								setShowUpdate(false);
							}}
						>
							close
						</button>
					</>
				)}
			</div>
		);
	} else {
		return (
			<div className='ml-4'>
				<Title className='font-bold'>Employee List</Title>
				<table>
					<thead>
						<tr>
							<th>r/n</th>
							<th>Name</th>
							<th>role</th>
							<th>salary(ETB)</th>
							<th>address</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((emp) => (
							<tr key={emp.id}>
								<td></td>
								<td>{emp.name}</td>
								<td>{emp.role}</td>
								<td>{emp.salary}</td>
								<td>{emp.address}</td>
							</tr>
						))}
					</tbody>
				</table>
				<Button
					className='bg-green-500 pt-0 mt-4 px-2 mr-1 shadow-md'
					onClick={() => {
						setEditable(true);
					}}
				>
					update data
				</Button>
			</div>
		);
	}
};

export default ShowEmployees;
