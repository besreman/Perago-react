import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { employeeDb } from "../firebaseconfig";
import { TreeNodeModel } from "./NodeInterface";
import RenderTree from "./RenderTree";
import { Paper, Title } from "@mantine/core";

const RoleTree: React.FC = () => {
	const [roles, setRoles] = useState<TreeNodeModel[]>([]);

	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const rolesCollection = collection(employeeDb, "role");
				const querySnapshot = await getDocs(rolesCollection);

				const rolesData: TreeNodeModel[] = [];

				querySnapshot.forEach((doc) => {
					const data = doc.data();
					const roleNode: TreeNodeModel = {
						name: data.name,
						description: data.description,
						parent: data.parent,
						children: [],
					};

					rolesData.push(roleNode);
				});

				// Build parent-child relationships in a single pass
				rolesData.forEach((roleNode) => {
					const parentName = roleNode.parent;
					if (parentName) {
						const parentNode = rolesData.find(
							(role) => role.name === parentName
						);
						if (parentNode) {
							parentNode.children.push(roleNode);
						}
					}
				});

				// Filter top-level roles for rendering
				const topLevelRoles = rolesData.filter((role) => role.parent === null);

				setRoles(topLevelRoles);
			} catch (error) {
				console.error("Error fetching roles:", error);
			}
		};

		fetchRoles();
	}, []);

	return (
		<Paper shadow='md' radius='md'>
			<Title order={2} className='font-bold'>
				Role Hierarchy
			</Title>
			<ul className='justify-center ml-6'>
				{roles.length > 0 && roles.map((rootRole) => RenderTree(rootRole))}
			</ul>
		</Paper>
	);
};

export default RoleTree;
