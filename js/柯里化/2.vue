// 父向子传值
<template>
  <div id="app">
      <div id="item" :user="User"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            User: 'Jack'
        }
    }
}
</script>


<template>
  <!-- <div id="user">{{user}}</div> -->
</template>

<script>
export default {
    props:['user']
}
</script>



// 子向父传值
<template>
  <!-- <div id="app">
      <div id="user" @getUserName="getUser">{{username}}</div>
  </div> -->
</template>

<script>
export default {
    data(){
        return {
            username: ''
        }
    },
    methods:{
        getUser(msg){
            this.username = msg
        }
    }
}
</script>


<template>
  <!-- <div id="index">
      <input type="text" @change="setuser" v-model="UserName">
  </div> -->
</template>

<script>
export default {
    data(){
        return{
            UserName: ''
        }
    },
    methods:{
        setuser(){
            this.$emit('getUserName', UserName)
        }
    }
}
</script>