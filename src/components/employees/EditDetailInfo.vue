<template>
    <!-- <div class="modal fade" id="editDetailInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
      <div class="modal-body">
        <form >
           <div class="form-group">
           <label for="">Mobile:</label>
          <input type="text" class="form-control" v-model="mobile">
        </div>
        <div class="form-group">
          <label for="">Gender:</label>
          <div class="form-check">
            <input type="radio" class="form-check-input" v-model="gender" value="Male">
            <label class="form-check-label">Male</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" v-model="gender" value="Female">
            <label class="form-check-label">Female</label>
          </div>
          
        </div>
        <div class="form-group">
          <label for="">Date</label>
          <input type="date" class="form-control" v-model="dob" >
        </div>
        <div class="form-group">
          <label for="">Address:</label>
          <input type="text" class="form-control" v-model="address" >
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
       </form>
      </div>
    </div>
  </div>
</div> -->

<div>
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
          Edit Detail Info
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                 <v-text-field prepend-icon="mdi-cellphone" label="Mobile:" type="text"   v-model="empMobile" ></v-text-field>
        <v-radio-group v-model="empGender" >
          <v-radio  label="Male" value="Male"></v-radio>
          <v-radio  label="Female" value="Female"></v-radio>    
        </v-radio-group>

         <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="empDob"
        transition="scale-transition"
        offset-y
        min-width="290px" 
      >
        <template v-slot:activator="{ on, attrs }"  >
          <v-text-field
            v-model="empDob"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on" 
          ></v-text-field>
        </template>
        <v-date-picker v-model="empDob" no-title scrollable >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(empDob)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    
          <v-text-field prepend-icon="mdi-cellphone"  label="Address:" type="text" v-model="empAddress" ></v-text-field>
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
            @click="onUpdateEmployeeDetail"
          >
            Edit
          </v-btn>
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
import store from '@/store'
export default {
  props:['id','mobile','gender','dob','address'],
  data(){
    return{
      dialog:false,
      empGender:this.gender,
      empMobile:this.mobile,
      empAddress:this.address,
      empDob:this.dob,
      menu:false,
    }
  },
  methods:{
    async onUpdateEmployeeDetail(){
      var formData={
        id:this.id,
        gender:this.empGender,
        mobile:this.empMobile,
        address:this.empAddress,
        dob:this.empDob
      }
      try{
        await store.dispatch('updateEmployeeDetail',formData)
        this.dialog=false;
      }
      catch(err){
        console.log(err);
      }
    }
  }
}
</script>