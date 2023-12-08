import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { TextInput, Alert, Title, Button } from "@mantine/core";
import { employeeDb } from "./firebaseconfig";

const AddEmployee = () => {
	const [name, setName] = useState("");
	const [salary, setSalary] = useState<number | string>(0);
	const [address, setAddress] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [roles, setRoles] = useState<string[]>([]);
	const [selectedRole, setSelectedRole] = useState("");

	const employeesCollection = collection(employeeDb, "employee");

	// Fetch roles from the database and extract role names
	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const rolesCollection = collection(employeeDb, "role");
				const querySnapshot = await getDocs(rolesCollection);

				const roleNames = querySnapshot.docs.map((doc) => doc.data().name);
				setRoles(["", ...roleNames]);
			} catch (error) {
				console.error("Error fetching roles:", error);
			}
		};

		fetchRoles();
	}, []);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await addDoc(employeesCollection, {
				Name: name,
				Role: selectedRole,
				Salary: salary,
				Address: address,
			});

			console.log("Employee added successfully");
		} catch (err) {
			console.error(err);
			setError("There was an error when adding the Employee");
		}
	};

	return (
		<>
			<Title order={1} className='text-xl font-bold'>
				Add new employee to our company
			</Title>
			<form onSubmit={handleSubmit} className='bg-slate-200 p-5 mb-0'>
				<fieldset>
					<legend className='font-bold pb-2'>
						Fill the required informations below
					</legend>
					<TextInput
						label='Full Name of the Employee'
						type='text'
						name='name'
						value={name}
						onChange={(event) => setName(event.currentTarget.value)}
					/>
					<div>Role</div>
					<select
						value={selectedRole}
						onChange={(e) => setSelectedRole(e.target.value)}
					>
						<option value='' disabled>
							Choose a role
						</option>
						{roles.map((role) => (
							<option key={role} value={role}>
								{role}
							</option>
						))}
					</select>
					<TextInput
						label='Salary'
						type='text'
						name='salary'
						value={salary}
						onChange={(event) => setSalary(Number(event.currentTarget.value))}
					/>
					<TextInput
						label='Address'
						type='text'
						name='address'
						value={address}
						onChange={(event) => setAddress(event.currentTarget.value)}
					/>
					<Button
						type='submit'
						className='bg-green-500 pt-0 mt-4 px-2 mr-1 shadow-md'
					>
						Add The Employee
					</Button>
				</fieldset>
			</form>
			{error && <Alert>{error}</Alert>}
		</>
	);
};

export default AddEmployee;
