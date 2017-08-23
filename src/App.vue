<template>
  <div id="app">
	<top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/commonality/header.vue";
export default {
  name: 'app',
  components:{
   	 top:header,
    }
}
</script>

<style>

</style>
