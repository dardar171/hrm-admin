<template>
  <div>
      <div v-if="employee">
        <div class="form-group">
          <label for="">Name:</label>
          <input type="text" class="form-control" v-model="employee.name" >
        </div>
        <div class="form-group">
           <label for="">Email:</label>
          <input type="email" class="form-control" v-model="employee.email">
        </div>
      
        <input type="submit" @click="onSubmit" class="btn btn-primary btn-block" value="Submit">
      
  </div>
  </div>
</template>

<script>
import store from '@/store'

// import axios from 'axios'
 //import router from '@/router'
export default {
  computed:{
    employee(){
      return store.getters.employee;
    },
  },
  // data(){
  //   return{
  //     name:null,
  //     email:null,
     
  //   }
  // },
  created(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      store.dispatch("getEmployee",this.$route.params.id);
      
      // axios.get("http://localhost:8000/api/employees/"+this.$route.params.id).then((res)=>{
      //   this.name=res.data.name;
      //   this.email=res.data.email;
      // })
    },
    onSubmit(){
    //  var formData={
    //     name:this.name,
    //     email:this.email,
      
    //   } 
      store.dispatch("updateEmployee",this.employee).then(()=>{
   this.$router.push({name:'EmployeeList'})
      })
   
      //  axios.put("http://localhost:8000/api/employees/"+this.$route.params.id,formData).then(()=>{
      //    alert("success"),
      //    router.push({name:'EmployeeList'})
      // });
    }
  }
}

</script>

<style>

</style>