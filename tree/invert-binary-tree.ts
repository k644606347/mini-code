type NodeValue = string | number;
type BinaryTree = {
    value: NodeValue;
    left?: BinaryTree;
    right?: BinaryTree;
}
export function invertBinaryTree(tree?: BinaryTree): BinaryTree | undefined {
    if (!tree) return;

    return createBinaryTree({
        value: tree.value,
        left: invertBinaryTree(tree.right),
        right: invertBinaryTree(tree.left),
    })
}

function createBinaryTree(config: {
    value: NodeValue;
    left?: BinaryTree;
    right?: BinaryTree;
}) {
    return {
        ...config,
    }
}

console.log(
    JSON.stringify(
        invertBinaryTree({
            value: 1,
            left: {
                value: 2,
                left: {
                    value: '2.1'
                },
                right: {
                    value: '2.2',
                    right: {
                        value: '2.2.2'
                    }
                }
            },
            right: {
                value: 3,
                left: {
                    value: '3.1',
                    left: {
                        value: '3.1.2'
                    },
                },
                right: {
                    value: '3.2',
                    left: {
                        value: '3.2.1'
                    },
                    right: {
                        value: '3.2.2'
                    }
                }
            }
        }), null, '\t')
)