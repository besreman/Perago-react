import RoleList from "./RoleList";

const TreeRender = () => {
	const roles = [
		{ name: "Role1", childrens: [] },
		{ name: "Role2", childrens: [] },
	];

	return (
		<div>
			<RoleList roles={roles} />
		</div>
	);
};

export default TreeRender;
