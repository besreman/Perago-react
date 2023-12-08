import { TextInput, Button, Alert, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { employeeDb } from "./firebaseconfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";

const CreateRole = () => {
	const [roles, setRoles] = useState([""]);
	const [parentRole, setParentRole] = useState("");
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("role");
	const [error, setError] = useState<string | null>(null);

	const rolesCollection = collection(employeeDb, "role");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await addDoc(rolesCollection, {
				name: name,
				parent: parentRole,
				description: desc,
			});

			console.log("Role " + name + " added successfully");
		} catch (err) {
			console.error(err);
			setError("There was an error when adding the Employee");
		}
	};

	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const rolesCollection = collection(employeeDb, "role");
				const querySnapshot = await getDocs(rolesCollection);

				const roleNames = [""];
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					roleNames.push(data.name);
				});

				setRoles(roleNames);
			} catch (error) {
				console.error("Error fetching roles:", error);
			}
		};

		fetchRoles();
	}, []);
	return (
		<>
			<Title className='text-xl font-bold'>Add new Role</Title>
			<form className='bg-slate-200 p-5 mb-0' onSubmit={handleSubmit}>
				<fieldset>
					<legend className='font-bold pb-2'>Fill the fields below</legend>
					<TextInput
						label='Name of the role'
						type='text'
						name='name'
						onChange={(event) => setName(event.currentTarget.value)}
					/>
					<TextInput
						label='Enter the description of the role'
						type='text'
						name='desc'
						onChange={(event) => setDesc(event.currentTarget.value)}
					/>
					<div>Select parent role</div>
					<select
						value={parentRole}
						onChange={(e) => setParentRole(e.target.value)}
					>
						<option value='' disabled>
							Choose the parent role
						</option>
						{roles.map((role) => (
							<option key={role} value={role}>
								{role}
							</option>
						))}
					</select>
					<Button
						className='bg-green-500 pt-0 mt-4 px-2 mr-1 shadow-md block'
						variant='filled'
						type='submit'
					>
						Add to roles
					</Button>
				</fieldset>
			</form>
			{error && <Alert>{error}</Alert>}
		</>
	);
};

export default CreateRole;
