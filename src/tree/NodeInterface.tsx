export interface TreeNodeModel {
	name: string;
	description: string;
	children: TreeNodeModel[];
	parent: string | null;
}

export interface NodeProps {
	treeNodeModel: TreeNodeModel;
}
