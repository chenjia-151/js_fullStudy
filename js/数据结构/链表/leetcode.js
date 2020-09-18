// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/


var deleteNode = function (head, val) {
    let headNode = new ListNode()
    headNode.next = head
    let previous = headNode
    let current = head

    while (current) {
        if (current.val === val) {
            let temp = current.next
            previous.next = temp
            current.next = null
            break
        }
        previous = current
        current = current.next
    }
    return headNode.next
}
