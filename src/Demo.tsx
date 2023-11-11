import { MantineProvider, Select, createTheme, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import CreateRole from "./CreateRole";
import ShowEmployees from "./demo/ShowEmployees";
import AddEmployee from "./demo/AddEmployee";
import { Employee } from "./demo/Employee";
import RenderTree from "./demo/tree/RenderTree";

type empArray = Employee[];

const Employees: empArray = [
	{
		name: "Nathy Abebe",
		id: "EITM21",
		role: "CEO",
		address: "Addisababa",
		salary: 56325,
	},
	{
		name: "Minalu Mesele",
		id: "EITM26",
		role: "Tech Lead",
		address: "Addisababa",
		salary: 23567,
	},
];

const Demo: React.FC = () => {
	const theme = createTheme({
		colors: {
			deepBlue: ["#E9EDFC", "#C1CCF6", "#99ABF0"],
			blue: ["#E9EDFC", "#C1CCF6", "#99ABF0"],
		},

		shadows: {
			md: "1px 1px 3px rgba(0, 0, 0, .25)",
			xl: "5px 5px 3px rgba(0, 0, 0, .25)",
		},

		headings: {
			fontFamily: "Roboto, sans-serif",
			sizes: {
				h1: { fontSize: rem(36) },
			},
		},
	});

	const [selected, setSelected] = useState<string | null>(null);

	const HandleClick = () => {
		if (selected === "Create role") return <CreateRole />;
		else if (selected === "Show employee list")
			return <ShowEmployees props={Employees} />;
		else if (selected === "Register employee")
			return (
				<AddEmployee id={""} name={""} role={""} address={""} salary={0} />
			);
		else if (selected === "Roles hierarchy") return <RenderTree />;
		else return <h1>other options selected!</h1>;
	};

	return (
		<MantineProvider theme={theme}>
			<Select
				label='Perago Employee registration management'
				placeholder='pick your option'
				data={[
					"Create role",
					"Register employee",
					"Show employee list",
					"Roles hierarchy",
				]}
				value={selected}
				onChange={(value) => {
					setSelected(value);
					HandleClick();
				}}
			/>

			{selected && <div>{HandleClick()}</div>}
		</MantineProvider>
	);
};

export default Demo;
