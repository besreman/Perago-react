import { TextInput, Select, Button } from "@mantine/core";

const CreateRole = () => {
	return (
		<>
			<h3>Add new Role</h3>
			<form className='w-fit'>
				<fieldset>
					<legend>Fill the required informations below</legend>
					<TextInput label='Name' type='text' name='name' />
					<TextInput label='description' type='text' name='desc' />
					<Select
						label='Parent role'
						placeholder='please select role'
						data={["CEO", "CTO", "Tech lead"]}
					/>
					<Button
						className='text-black'
						variant='filled'
						type='submit'
						onClick={() => {
							alert("role added successfully");
						}}
					>
						add
					</Button>
				</fieldset>
			</form>
		</>
	);
};

export default CreateRole;
