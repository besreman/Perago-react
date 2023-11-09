import { Employee } from "./Employee";

import { TextInput, Select } from "@mantine/core";

const AddEmployee = (emp: Employee) => {
	return (
		<>
			<h3>Add new emp to our company</h3>
			<form className='w-fit'>
				<fieldset>
					<legend>Fill the required informations below</legend>
					<TextInput
						label='Name'
						type='text'
						name='name'
						defaultValue={emp.name}
					/>
					<TextInput label='id' type='text' name='id' defaultValue={emp.id} />
					<Select
						label='Role'
						placeholder='please select role'
						data={["CEO", "CTO", "Tech lead"]}
					/>
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
						onClick={() => {
							alert("added successfully");
						}}
					>
						add
					</button>
				</fieldset>
			</form>
		</>
	);
};

export default AddEmployee;
