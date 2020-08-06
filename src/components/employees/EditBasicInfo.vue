<template>
    
<!-- Modal -->
        <!-- <div v-if="employee">
        <div class="modal fade" id="editBasicInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="onUpdateBasicInfo">
            <div class="modal-body">
      
         <div class="form-group">
          <label for="">Name:</label>
          <input type="text" class="form-control" v-model="empName" >
        </div>
        <div class="form-group">
           <label for="">Email:</label>
          <input type="email" class="form-control" v-model="empEmail">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <input type="submit" class="btn btn-primary " value="Submit">  
      </div>
       
      </div>
      </form>
       
    </div>
  </div>
</div>
</div> -->

<!-- <b-modal id="editBasicInfo" title="Edit Basic Info">
<div class="d-block">
  <b-form  v-if="employee">
     <b-form-group label="Name">
       <b-form-input type="text" v-model="empName">
       </b-form-input>
     </b-form-group>
     <b-form-group label="Email">
       <b-form-input type="email" v-model="empEmail">
       </b-form-input>
     </b-form-group>
     <b-button class="mt-3" block @click="$bvModal.hide('onUpdateBasicInfo')">Close</b-button>
    </b-form>
    <template v-slot:modal-footer>
      <b-button>Close</b-button>
    </template> 
    </div>
    
</b-modal> -->
<div>
 
  <!-- <b-modal id="editBasicInfo" ref="my-modal" hide-footer>
    <template v-slot:modal-title>
      Edit Basic Info
    </template>
    <div class="d-block ">
      <b-form  v-if="employee">
     <b-form-group label="Name">
       <b-form-input type="text" v-model="empName">
       </b-form-input>
     </b-form-group>
     <b-form-group label="Email">
       <b-form-input type="email" v-model="empEmail">
       </b-form-input>
     </b-form-group>
     <b-button class="mt-3" block @click="onUpdateBasicInfo">Save</b-button>
     <b-button class="mt-3" block @click="hideModal">Close</b-button>
     
    </b-form>
    </div>
    
  </b-modal> -->

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="warning"
          icon
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Edit Basic Info
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field type="text" prepend-icon="mdi-account" label="Name" v-model="empName"></v-text-field>
                </v-col>
              </v-row>
               <v-row>
                <v-col>
                  <v-text-field type="email" prepend-icon="mdi-email" label="Email" v-model="empEmail"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="onUpdateBasicInfo"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
import store from '@/store'
export default {
  props:['id','name','email'],
  computed:{
    employee(){
      return store.getters.employee;
    },
  },
  data(){
    return{
      empId:this.id,
      empName:this.name,
      empEmail:this.email,
      dialog: false,
    }
  },
  // created(){
  //   this.fetchData();
  // },
  methods:{
    hideModal() {
        this.$refs['my-modal'].hide()
      },
      //  fetchData(){
      // store.dispatch("getEmployee",this.id);
      //  },
   async onUpdateBasicInfo(){
      
    var formData={
      id:this.empId,
      name:this.empName,
      email:this.empEmail,
    }
    console.log(formData);
    try{
       store.dispatch("updateEmployee",formData);
       this.dialog=false;
    }
    catch(err){
      console.log(err);
    }
    
  
    

    }
  
}
}
</script>