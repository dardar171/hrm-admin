<template>
 <v-container>
   <v-card>
     <v-card-title>
       Create Employee
     </v-card-title>
     <v-card-text>
      <v-form @submit.prevent="onSubmit">
        <p class="alert alert-danger" v-if="error" >{{errorMessage}}</p>
        
          <v-text-field prepend-icon="mdi-account"
          :error-messages="nameErrors"
           @input="$v.name.$touch()" 
           @blur="$v.name.$touch()" 
           label="Name" 
           v-model="name" ></v-text-field>
          <v-text-field prepend-icon="mdi-email" label="Email"  @input="$v.email.$touch()" @blur="$v.email.$touch()" type="email" v-model="email" ></v-text-field>
          
          <!-- <v-text-field prepend-icon="mdi-lock" label="Password:" type="text" v-model="password" :rules="[minLength,required('Password')]"
            :counter="10"
      
            required></v-text-field> -->
            <v-text-field prepend-icon="mdi-lock" label="Password:" type="text" v-model="password" 
            :counter="10"
      
            required></v-text-field>
         
          <v-text-field prepend-icon="mdi-cellphone" label="Mobile:" type="text"   v-model="mobile" ></v-text-field>
        <v-radio-group v-model="gender" >
          <v-radio  label="Male" value="Male"></v-radio>
          <v-radio  label="Female" value="Female"></v-radio>    
        </v-radio-group>

         <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dob"
        transition="scale-transition"
        offset-y
        min-width="290px" 
      >
        <template v-slot:activator="{ on, attrs }"  >
          <v-text-field
            v-model="dob"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on" 
          ></v-text-field>
        </template>
        <v-date-picker v-model="dob" no-title scrollable >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dob)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    
          <v-text-field prepend-icon="mdi-cellphone"  label="Address:" type="text" v-model="address" ></v-text-field>
        
         <v-btn type="submit" color="primary">Submit</v-btn>
        
      </v-form>
      </v-card-text>
      </v-card>
      
  </v-container>
</template>

<script>
import store from '@/store'
import router from '@/router'
import {myMixin} from '@/mixins/exampleMixin.js'
import { validationMixin } from 'vuelidate'
 import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins:[myMixin, validationMixin],
  validations:{
    name:{
      required,
      "minLength":minLength(4),
    },
    email:{
      required,
      "minLength":minLength(4),
      email
    }
  },
  computed:{
    nameErrors(){
      var errorMessages=[];
      if(!this.$v.name.$dirty){
        return errorMessages;
      }
      if(!this.$v.name.required){
        errorMessages.push("Name is required");
      }
      if(!this.$v.name.minLength){
        errorMessages.push("Name must be at least 4 characters")
      }
      return errorMessages;
    }
  },
  data(){
    return{
      name:null,
      email:null,
      password:null,
      mobile:null,
      gender:'Male',
      dob:null,
      address:null,
      error:false,
      errorMessage:null,
      menu:false,
      //  minLength:value=>(value && value.length>=8)||"Password must be at least 8 characters",
      //  required:(fieldName)=>{
      //    return value=>(value && value.length>0)||`${fieldName} is required.`
      //  }
    }
  },
  methods:{
    async onSubmit(){
      this.error=false;
      this.errorMessage=null;
      var formData={
        name:this.name,
        email:this.email,
        password:this.password,
        mobile:this.mobile,
        gender:this.gender,
        dob:this.dob,
        address:this.address,
      } 
      console.log(formData);
      try{
          await store.dispatch('createEmployee',formData);
        alert("success");
        this.name=null;
        this.email=null;
        this.password=null;
        this.mobile=null;
        this.gender="Male";
        this.dob=null;
        this.address=null;
        
        router.push("/employees");
      }
    catch(err){
      this.error=true;
      // this.errorMessage=err.response.data.message;
       console.log(err.response)
      this.errorMessage="Error Occur";
    }
      
    }
  }
}
</script>

<style>

</style>