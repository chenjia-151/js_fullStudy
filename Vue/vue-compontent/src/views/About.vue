<template>
  <div class="about">
    <p>{{animal}}</p>
    <User :userName="name" @animalChange="updateAnimal"></User>
    <Animal @babyName="baby"></Animal>
  </div>
</template>

<script>
import User from "@/components/User";
import Animal from "@/components/Animal";
export default {
  name: "About",
  data() {
    return {
      name: "王五",
      babyName: ""
    };
  },
  components: {
    User,
    Animal
  },
  methods:{
    updateAnimal(baby){
      // console.log('baby');
      this.baby = baby
    }
  }
};
</script>

<style>
.about {
  color: red;
}
</style>