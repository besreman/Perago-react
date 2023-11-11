export interface TreeNodeModel {
	name: string;
	children: TreeNodeModel[];
}

export interface NodeProps {
	treeNodeModel: TreeNodeModel;
}
