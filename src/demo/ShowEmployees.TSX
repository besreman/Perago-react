import "./style.css";
import { Employee } from "./Employee";
import { useState } from "react";
import UpdateEmployee from "./UpdateEmployee";

type empArray = Employee[];

const ShowEmployees: React.FC<{ props: empArray }> = ({ props }) => {
	const [showUpdate, setShowUpdate] = useState(false);
	const [empData, setEmpData] = useState([""]);
	const [salary, setSalaryValue] = useState(0);
	const [editable, setEditable] = useState(false);

	if (editable) {
		return (
			<>
				<table>
					<thead>
						<th>r/n</th>
						<th>Id number</th>
						<th>Name</th>
						<th>role</th>
						<th>salary(ETB)</th>
						<th>address</th>
						<th>delete</th>
						<th>edit</th>
					</thead>
					<tbody>
						{props.map((emp) => (
							<tr>
								<td></td>
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.role}</td>
								<td>{emp.salary}</td>
								<td>{emp.address}</td>
								<td>
									<button
										onClick={() => {
											console.log("delete");
										}}
									>
										delete
									</button>
								</td>
								<td>
									<button
										className='bg-purple-400'
										onClick={() => {
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
				<button
					className='btnUpdate'
					onClick={() => {
						setEditable(false);
					}}
				>
					back
				</button>

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
							onClick={() => {
								setShowUpdate(false);
							}}
						>
							close
						</button>
					</>
				)}
			</>
		);
	} else {
		return (
			<>
				<table>
					<thead>
						<td>r/n</td>
						<td>Id number</td>
						<td>Name</td>
						<td>role</td>
						<td>salary(ETB)</td>
						<td>address</td>
					</thead>
					<tbody>
						{props.map((emp) => (
							<tr>
								<td></td>
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.role}</td>
								<td>{emp.salary}</td>
								<td>{emp.address}</td>
							</tr>
						))}
					</tbody>
				</table>
				<button
					className='btnUpdate'
					onClick={() => {
						setEditable(true);
					}}
				>
					update data
				</button>
			</>
		);
	}
};

export default ShowEmployees;
