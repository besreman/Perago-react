import { Employee } from "./Employee";

import { TextInput } from "@mantine/core";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { employeeDb } from "./firebaseconfig";
import React, { useEffect, useState } from "react";

const UpdateEmployee = (emp: Employee) => {
	const [roles, setRoles] = useState<string[]>([]);
	const [selectedRole, setSelectedRole] = useState("");

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

	const updateEmployee = async (
		employeeId: string,
		updatedData: {
			Name?: string;
			Role?: string;
			Salary?: number;
			Address?: string;
		}
	) => {
		try {
			const employeeDocRef = doc(employeeDb, "employee", employeeId);
			alert(
				"Employee data being updated! check the employee table for the update"
			);

			await updateDoc(employeeDocRef, updatedData);
		} catch (error) {
			console.error("Error updating employee:", error);
		}
	};

	const updateHundler = () => {
		updateEmployee(emp.id, {
			Name: emp.name,
			Role: selectedRole,
			Salary: emp.salary,
			Address: emp.address,
		});
	};

	return (
		<div className='flex'>
			<form className='bg-slate-200 p-5 mt-4'>
				<fieldset>
					<legend className='font-bold'>
						Update the fields for the selected employee
					</legend>
					<TextInput
						label='Name'
						type='text'
						name='name'
						defaultValue={emp.name}
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
						defaultValue={emp.salary}
					/>
					<TextInput
						label='Address'
						type='text'
						name='address'
						defaultValue={emp.address}
					/>
					<button
						type='submit'
						onClick={updateHundler}
						className='bg-green-500 pt-0 mt-4 px-2 mr-1 shadow-md'
					>
						apply and save
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default UpdateEmployee;
