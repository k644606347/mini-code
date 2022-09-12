type NodeValue = string | number;
type BinaryTree = {
    value: NodeValue;
    left?: BinaryTree;
    right?: BinaryTree;
}

/**
 * by recursion
 * @param tree 
 * @returns 
 */
export function invertBinaryTree(tree?: BinaryTree): BinaryTree | undefined {
    if (!tree) return;

    return createBinaryTree({
        value: tree.value,
        left: invertBinaryTree(tree.right),
        right: invertBinaryTree(tree.left),
    })
}

export function byIteration(tree?: BinaryTree): BinaryTree | undefined {
    if (!tree) return;
    const result = createBinaryTree(tree);
    const callStask: Array<BinaryTree | undefined> = [result];

    while (callStask[0]) {
        const curTree = callStask.shift();
        if (!curTree) continue;
        
        // 后进先出，所以先推入right再推入left
        const { left, right } = curTree;
        curTree.left = right ? createBinaryTree(right) : undefined;
        callStask.unshift(curTree.left);

        curTree.right = left ? createBinaryTree(left) : undefined;
        callStask.unshift(curTree.right);
    }
    return result;
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
        byIteration({
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
                        value: '3.1.1'
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