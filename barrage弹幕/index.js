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
        this.barrages = this.data.map(item => new Barrage(item,this))  // 遍历

        //  执行所有弹幕的渲染操作
        this.render()
    }

    // 渲染 canvas 绘制的弹幕
    render(){
        // 渲染的第一步，清除原来的画布
        this.clear()

        // 渲染的第二步，渲染弹幕
        this.renderBarrage()
        if(this.isPaused === false){
            // 通过递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }

    }
    clear (){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    renderBarrage(){
        //  首先拿到当前视频播放的时间
        // 要根据该时间和弹幕要展示的时间做对比，来判断是否要展示弹幕
        let time = this.video.currentTime 

        // 遍历所有的弹幕，每一个barrage都是Barrage的实例
        this.barrages.forEach(barrage =>{
            // 用一个flag来处理是否默认渲染，默认是false
            // 并且只有在视频播放时间大于等于弹幕的展示时间时，才处理
            if(!barrage.flag && time >= barrage.time){
                // 判断当前这条弹幕是否被初始化过
                // 如果 isInit 是 false ，那么需要对当前的弹幕进行初始化的操作
                if(!barrage.isInit){
                    barrage.init()
                    barrage.isInit = true
                }

                // 弹幕要从右往左渲染，所以x坐标减去当前的弹幕的speed即可
                barrage.x -= barrage.speed
                barrage.render()

                // 如果当前的弹幕的x轴坐标比自身的宽度负值还要小，就表示出去屏幕
                if(barrage.x < -barrage.width){
                    barrage.flag = true  // 把flag设置成true，下次就不会渲染
                }   
            }
        })
    }
    add(obj){
        // 实际上就是往barrages里添加一项Barrage实例
        this.barrages.push(new Barrage(obj,this))
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

    // 渲染每一条弹幕
    render(){
        //  设置画布文字的字体和字号
        this.context.ctx.font = `${this.fontSize}px Arial`   //  变量使用 ${}
        // 设置画布的文字颜色
        this.context.ctx.fillStyle = this.color;
        // 绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}


// 创建 CanvasBarrage 的实例
let canvasBarrage = new CanvasBarrage(canvas,video,{data})  // 传入3个实参

video.addEventListener('play',() =>{   //监听播放事件
    canvasBarrage.isPaused = false
    canvasBarrage.render()
})

// 发送弹幕的方法
function send(){
    let value = $txt.value  // 输入的内容
    let time = video.currentTime  // 当前视频时间
    let color = $color.value
    let fontSize = $range.value
    let obj = {value,time,color,fontSize}

    // 添加弹幕数据的方法
    canvasBarrage.add(obj)
    $txt.value = " "
}

$btn.addEventListener('click',send)

//  回车发送弹幕
$txt.addEventListener('keyup',e =>{
    // console.log(e);
    let key = e.keyCode
    key === 13 && send()  //  前面符合条件的时候(key===13)，执行后面的(send())
})