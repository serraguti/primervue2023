<template>
  <MusicaComponent/>
  <HomeComponent/>
  <CineComponent/>
  <HolaMundo/>  
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HolaMundo from './components/HolaMundo.vue'
import CineComponent from './components/CineComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    , HolaMundo
    , CineComponent
    , MusicaComponent
    , HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
