import TreeNode from "./TreeNode";

const RoleList = ({ roles }) => {
	return roles.map((role) => (
		<TreeNode key={role.name} name={role.name} childrens={role.childrens} />
	));
};

export default RoleList;
