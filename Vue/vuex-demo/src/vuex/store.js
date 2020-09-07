import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

// vuex 中的计算属性 getters  能够修改掉数据源中的数据
const getters = {
    abc: () => {
        return state.count += 100
    }
}

const mutations = {    //  不建议使用 异步方法 会消耗性能
    add(state) {
        state.count++
    },
    // 括号中的参数可以随便定义 但是定义的参数 就是 state中的内容
    reduce(state) {
        state.count--
    }
}

// 提交 mutations 里面的方法  如果有接口请求的话 建议 在 action 中使用异步方法 不建议在 mutation中使用异步
const actions = {
    addAction(context) {
        context.commit('add')
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

const moduleB = {
    state:{

    },
    mutations:{

    },
    getters:{

    }
}

export default new Vuex.Store({
    modules:{
        a: moduleA,
        b: moduleB
    }
})