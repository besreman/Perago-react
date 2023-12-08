import React from "react";
import { TreeNodeModel } from "./NodeInterface";
import { Title } from "@mantine/core";

const RenderTree = (role: TreeNodeModel) => (
	<>
		{<Title order={3}>{`${role.name}`}</Title>}
		<li key={role.name} className='ml-2'>
			{role.children.length > 0 && (
				<ul key={role.name}>
					{role.children.map((child) => RenderTree(child))}
				</ul>
			)}
		</li>
	</>
);

export default RenderTree;
