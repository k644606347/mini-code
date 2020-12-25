import { bindTimeLog } from "./Tools";

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let n1: null | ListNode = l1, n2: null | ListNode = l2,
        results: ListNode[] = [],
        carry = 0;

    while (n1 || n2 || carry) {
        let v1 = 0,
            v2 = 0;
        if (n1) {
            v1 = n1.val;
            n1 = n1.next;
        }

        if (n2) {
            v2 = n2.val;
            n2 = n2.next;
        }

        let sum = v1 + v2 + carry,
            sumNode: ListNode = {
                val: sum >= 10 ? (sum - 10) : sum,
                next: null,
            };

        results.push(sumNode);

        let prevNode = results[results.length - 2];
        if (prevNode)
            prevNode.next = sumNode;

        carry = sum >= 10 ? 1 : 0;
    }

    return results[0];
};

let timeLog = bindTimeLog(addTwoNumbers);



function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let n1: null | ListNode = l1, n2: null | ListNode = l2,
        num1 = '', num2 = '',
        results: ListNode[] = [];

    while (n1 || n2) {
        if (n1) {
            let v1 = n1.val;
            num1 = '' + v1 + num1;
            n1 = n1.next;
        }

        if (n2) {
            let v2 = n2.val;
            num2 = '' + v2 + num2;
            n2 = n2.next;
        }
    }

    let temp = String(Number(num1) + Number(num2)).split('').reverse();
    temp.forEach((el, i) => {
        let node: ListNode = {
            val: Number(el),
            next: null,
        },
            prevNode = i > 0 ? results[i - 1] : null;

        if (prevNode)
            prevNode.next = node;
        results.push(node);

        //i < (temp.length - 1) ? Number(temp[i + 1]) : null,
    });

    return results[0];
};