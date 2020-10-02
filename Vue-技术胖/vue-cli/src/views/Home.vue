<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <compute></compute>
  </div>
</template>

<script>
// @ is an alias to /src
import Compute from '@/components/Compute.vue'

export default {
  name: 'Home',
  components: {
    Compute
  }
}
</script>
