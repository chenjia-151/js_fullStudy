let data = [
    {value:'厉害了我的哥', time:5, color:'red', speed:1, fontSize:22},  //给弹幕设置样式
    {value:'厉害了我的哥', time:10, color:'green', speed:1, fontSize:22},
    {value:'厉害了我的哥', time:20},
    {value:'厉害了我的哥', time:30, color:'green', speed:1, fontSize:22},
    {value:'厉害了我的哥', time:3, color:'green', speed:1, fontSize:22},
    {value:'厉害了我的哥', time:15, color:'blue', speed:1, fontSize:22}  
]

// 获取所有需要的dom元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建 CanvasBarrage 类
class CanvasBarrage{  // 做画布
    constructor(canvas,video,opts = {}){  // constructor 是一种用于创建或初始化对象的特殊方法 构造器  将这个 CanvasBarrage类构造成了一个函数
        // opts = {}  表示如果没有传值，就默认为{}，防止报错，ES6的语法
        if(!canvas || !video) return

        // 将传进来的参数挂载到 this 上
        this.video = video    // this 相当于 CanvasBarrage
        this.canvas = canvas

        // 设置 canvas 的宽高和 video 一致
        this.canvas.width = video.width
        this.canvas.height = video.height

        // 获取画布，操作画布
        this.ctx = canvas.getContext('2d')  // 创建一个画布

        // 设置默认参数，如果没传就给带上
        let defOpts = {
            color: '#fff',
            speed: 1.5,
            opacity: 0.5,   //透明度
            fontSize: 20,
            data:[]
        }

        //  合并对象，再挂载到 this 上
        Object.assign(this,defOpts,opts)   //  将两个对象进行合并,如果存在相同的属性，那么最后面的会覆盖前一个的属性，最后给到第一个属性this
        // 添加属性，用来判断播放暂停，默认是true为暂停
        this.isPaused = true

        // 去得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrages(item,this))  // 遍历
    }
}

// 创建第二个类  Barrage类，用来实例化每一条弹幕
class Barrage {
    constructor(obj,ctx){  // obj 代表的是每一条弹幕
        // 挂载上 value属性，让它等于这条弹幕的内容
        this.value = obj.value;  // 弹幕的内容
        this.time = obj.time;  // 弹幕的出现时间
        // 把 obj 和 ctx 都挂载到 this上，方便获取
        this.obj = obj
        this.context = ctx
    }

    // 初始化弹幕
    init(){
        // 如果数据里没有涉及到这4种参数，就直接取默认参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        // 计算每一条弹幕的宽度
        let p = document.createElement('p')  // 创建一个 p标签，用来装弹幕
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p) 

        // 把p标签添加到body里，这样就可以拿到宽度
        // 设置弹幕的宽度
        this.width = p.clientWidth
        // 得到了弹幕的宽度后，就把p标签移除
        document.body.removeChild(p)

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()

        // 做一下超出范围的处理
        if(this.y < this.fontSize){
            this.y = this.fontSize
        }else if(this.y > this.context.canvas.height - this.fontSize){
            this.y = this.context.canvas.height - this.fontSize
        }
    }
}


// 创建 CanvasBarrage 的实例
let CanvasBarrage = new CanvasBarrage(canvas,video,{data})  // 传入3个实参