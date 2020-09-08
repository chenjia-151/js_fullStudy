// 手动定义一个 vue 中的 UI 框架

let Toast = {}
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center',  // 控制 toast组件的默认显示的位置
        duration: '1500'  //  toast 组件在屏幕上显示的时间
    }

    for (let property in options) {
        opt[property] = options[property]   // 使用options配置   ==>  opt.property = options.property
    }

    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type  //  如果传了type 那么就使用该 type 作为位置展示
        }

        let toastTpl = Vue.extend({
            template: '<div class="vue-toast toast- ' + opt.defaultType + '">' + tips + '</div>'
        })

        let tpl = new toastTpl().$mount().$el;   //  编译成 HTML结构
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, opt.duration);
    }

    ['buttom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips)=>{
            return Vue.prototype.$toast(tips, type)
        }
    })
}

export {
    Toast
}