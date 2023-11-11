import { TreeNodeModel } from "./NodeInterface";
import TreeNode from "./TreeNode";

const employeeData: TreeNodeModel = {
	name: "CEO",
	children: [
		{
			name: "CTO",
			children: [
				{
					name: "Employee 1",
					children: [],
				},
				{
					name: "Employee 2",
					children: [],
				},
			],
		},
		{
			name: "CFO",
			children: [
				{
					name: "Employee 3",
					children: [],
				},
			],
		},
		{
			name: "COO",
			children: [],
		},
		{
			name: "HR",
			children: [],
		},
	],
};

const RenderTree = () => {
	return <TreeNode treeNodeModel={employeeData} />;
};

export default RenderTree;
