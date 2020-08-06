<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
       Employee List
     </v-card-title>
     <v-card-text>
    <template>
      <v-simple-table v-if="employees">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{employee.id}}</td>
              <td>{{employee.name}}</td>
              <td>{{employee.email}}</td>
              <td>
                <v-btn icon color="primary" :to="{ name:'Employee',params:{id:employee.id}}">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
     </v-card-text>
    </v-card>
    <v-btn @click="greet">Click</v-btn>
    </v-container>
  </div>
</template>
  

<script>
import store from "@/store";
import {myMixin} from "@/mixins/exampleMixin.js"
export default {
  mixins:[myMixin],
  // data(){
  //   return{
  //     employees:null,
  //   }
  // },
  beforeCreate() {
    console.log("BeforeCreate Works");
  },
  created() {
    console.log("Created Works"), this.getData();
  },
  beforeDestroy() {
    console.log("Before Destroy Works");
  },
  destroyed() {
    console.log("Destroyed");
  },
  computed: {
    employees() {
      return store.getters.employees;
    }
  },
  methods: {
    getData() {
      store.dispatch("getEmployees");
      // axios.get("http://localhost:8000/api/employees").then((res)=>{
      //   this.employees=res.data;
      // })
    },
    deleteEmployee(employee) {
      store.dispatch("deleteEmployee", employee.id);
    }
  }
};
</script>

<style>
</style>