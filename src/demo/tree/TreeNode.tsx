import { NodeProps } from "./NodeInterface";
import { List } from "@mantine/core";

const TreeNode: React.FC<NodeProps> = ({ treeNodeModel }) => {
	return (
		<div>
			<h6>{treeNodeModel.name}</h6>
			<List className=''>
				{treeNodeModel.children.map((node) => (
					<List.Item>
						<TreeNode treeNodeModel={node} />
					</List.Item>
				))}
			</List>
		</div>
	);
};

export default TreeNode;
