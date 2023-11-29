import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRole from "./CreateRole";
import Demo from "./Demo";
import AddEmployee from "./AddEmployee";
import Home from "./Home";
import ShowEmployees from "./ShowEmployees";
import RenderTree from "./demo/tree/RenderTree";
//import { Employee } from "./Employee";

//type empArray = Employee[];

// const Employees: empArray = [
// 	{
// 		name: "Nathy Abebe",
// 		id: "EITM21",
// 		role: "CEO",
// 		address: "Addisababa",
// 		salary: 56325,
// 	},
// 	{
// 		name: "Minalu Mesele",
// 		id: "EITM26",
// 		role: "Tech Lead",
// 		address: "Addisababa",
// 		salary: 23567,
// 	},
// ];

function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Demo />}>
						<Route index element={<Home />}></Route>
						<Route path='addEmployee' element={<AddEmployee />}></Route>
						<Route path='createRole' element={<CreateRole />}></Route>
						<Route path='ShowEmployees' element={<ShowEmployees />}></Route>
						<Route path='hierarchy' element={<RenderTree />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	);
}

export default App;
