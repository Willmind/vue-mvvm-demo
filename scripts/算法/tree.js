/**二叉树的前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let result = [];
    result.push(root.val)
    result = result.concat(preorderTraversal(root.left))
    result = result.concat(preorderTraversal(root.right))
    return result
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let arr = [];

    function order(node) {
        if (node !== null) {
            if (node.left !== null) {
                order(node.left)
            }
            arr.push(node.val)
            if (node.right !== null) {
                order(node.right)
            }
        }

    }

    order(root)
    return arr
};

/** 二叉树的最大深度
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1


};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if (!root) return true;

    function symmetry(left, right) {
        if (!left && !right) {
            return true
        }
        //若有两个节点p和q相等，那么就检查p节点的左孩子和q节点的右孩子、p节点的右孩子和q节点的左孩子是不是都相等
        if (left && right && left.val === right.val) {
            return symmetry(left.left, right.right) && symmetry(left.right, right.left)
        } else {
            return false
        }

    }
};

/**路径总和
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 使用递归的方法将从根节点到达每个叶子节点的路径和都保存起来，然后查找有没有目标值，要注意根节点没有左右孩子的特殊情况
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    const values = [];

    function d(p, value) {
        if (!p) return false;

        if (!p.left && !p.right) {
            values.push(value + p.val);
            return;
        }

        d(p.left, value + p.val);
        d(p.right, value + p.val);
    }

    if (!root) return false;
    if (!root.left && !root.right) return targetSum === root.val;

    if (!root.left) {
        d(root.right, root.val);
    } else if (!root.right) {
        d(root.left, root.val);
    } else {
        d(root, 0);
    }

    return values.includes(targetSum);

};

/** 从中序与后序遍历序列构造二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * 1.头节点位于后序遍历的最后一个元素；
 2.头节点可将中序遍历分为左右两部分；
 3.中序遍历的左右两部分存在递归；
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if(!inorder.length || !postorder.length){
        return null
    }

    let node = postorder.pop()//头节点
    let index = inorder.indexOf(node) //头节点在中序遍历数组中的位置

    let root = new TreeNode(node) //构造一棵树
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
    return root
};