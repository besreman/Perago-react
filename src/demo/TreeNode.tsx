import React from "react";
import RoleList from "./RoleList";

const TreeNode = ({ name, childrens }) => {
	return (
		<ul>
			<li key={name}>{childrens && <RoleList roles={childrens} />}</li>
		</ul>
	);
};

export default TreeNode;
