<template>
  <div class="home">
    <v-header></v-header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    'v-header': Header
  }
}
</script>
