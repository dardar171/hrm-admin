<template>
  <div>
    <SideBar :drawer="drawer"/>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hr Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon >mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import store from '@/store'
import router from '@/router'
export default {
  components:{
    SideBar
  },
data(){
   return{
     drawer:true
   }
 },
 methods: {
   async logout() {
     try{
       await store.dispatch('logout');
       router.push('/login');
     }
     catch(err){
       console.log(err);
     }
   }
 }
};

</script>

<style>
</style>