import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error from '@/components/Error.vue'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
            // alias: '/abc'     //  根路径下用别名的话必须使用 '/别名' 
        },
        {
            path: '*',   //  * 代表除了已经配置了的路径之外的所有路径
            component: Error
        },
        {
            path: '/hi',
            name: 'Hi',
            component: Hi,
            children: [
                {
                    path: 'hi1',
                    name: 'hi1',
                    // component: Hi1
                    redirect: '/'   //  redirect  重定向,将页面回到根路径下
                },
                {
                    path: 'hi2',
                    component: Hi2,
                    alias: 'wn'    //  通过alias 属性，可以给路由取别名，直接在后面加上wn也可以回到hi2页面
                }
            ]
        },
        {
            path: '/abc',
            name: 'abc',
            component: Error,
            beforeEnter: (to,from,next)=>{   //  路由中的钩子函数
                console.log('进入了404页面');
                console.log(from);
                console.log(to);
                next()
            }
        }
    ]
})