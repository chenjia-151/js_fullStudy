//  队列 ==> 线性结构  特点：一端存，另一端取

// 单链队列  时间复杂度: O(n)
class Queue {
    constructor() {
        this.queue = []
    }
    enQueue(item) {  // 往最后面添加数据
        this.queue.push(item)
    }
    deQueue() {
        return this.queue.shift()  //shift() 删除最前面的数据
    }
    getHeader() {  // 取出最前面的数据
        return this.queue[0]
    }
    getLength() {
        return this.queue.length
    }
    isEmpyt() {
        return this.getLength() === 0
    }
}


// 循环队列
class SqQueue {
    constructor(length) {
        this.queue = new Array(length + 1)
        // 队头
        this.first = 0
        // 队尾
        this.last = 0
        // 当前队列的大小
        this.size = 0
    }
    enQueue(item) {
        // 判断队尾 + 1 是否为对头
        // 如果是对头，就要扩容数组
        // % this.queue.length  防止数组越界
        if (this.first === (this.last + 1) % this.queue.length) {
            this.resize(this.getLength() * 2 + 1)
        }
        this.queue[this.last] = item
        this.size++
        this.last = (this.last + 1) % this.queue.length
    }

    deQueue() {
        if (this.isEmpyt()) {
            throw Error('Queue is empty')
        }
        let r = this.queue[this.first]
        this.queue[this.first] = null
        this.first = (this.first + 1) % this.queue.length
        this.size--
        // 判断当前队列大小是否过小
        // 为了不浪费空间
        if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
            this.resize(this.getLength() / 2)
        }
        return r
    }

    isEmpyt() {
        return this.first === this.last
    }

    getLength() {
        return this.queue.length - 1
    }
    resize(length) {
        let q = new Array(length)
        for (let i = 0; i < length; i++) {
            q[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = q
        this.first = 0
        this.last = this.size
    }
}