<template>
  <!-- <v-app v-if="employee">
  
    <EditBasicInfo :id="employee.id" :name="employee.name" :email="employee.email"/>
    <EditDetailInfo :mobile="employee.employee_detail.mobile" :gender="employee.employee_detail.gender" :dob="employee.employee_detail.dob" :address="employee.employee_detail.address"/>
    <h1>Detail</h1>
    <h1>Employee Basic</h1>
    <p>ID:{{employee.id}}</p>
    <p>Name:{{employee.name}}</p>
    <p>Email:{{employee.email}}</p>
    <b-button type="button" variant="success" data-toggle="modal" v-b-modal.editBasicInfo>Edit</b-button>
<hr>
    <h1>Employee Detail</h1>
    <p>Mobile:{{employee.employee_detail.mobile}}</p>
    <p>Gender:{{employee.employee_detail.gender}}</p>
    <p>Dob:{{employee.employee_detail.dob}}</p>
    <p>Address:{{employee.employee_detail.address}}</p>
    <v-btn type="button" variant="success" data-toggle="modal" data-target="#editDetailInfo">Edit</v-btn>
  </v-app>-->

  <v-container>
    <v-card v-if="employee">
      <v-card-title>
        <span>Basic Info</span>
        <EditBasicInfo :id="employee.id" :name="employee.name" :email="employee.email" />
      </v-card-title>
      <v-card-text>
        <p>ID:{{employee.id}}</p>
        <p>Name:{{employee.name}}</p>
        <p>Email:{{employee.email}}</p>
      </v-card-text>
    </v-card>
    <div v-if="employee">
      <v-card>
         <v-card-title>
        <span>Detail Info</span>
          <EditDetailInfo
        :id="employee.employee_detail.id"
        :mobile="employee.employee_detail.mobile"
        :gender="employee.employee_detail.gender"
        :dob="employee.employee_detail.dob"
        :address="employee.employee_detail.address"
      />
      </v-card-title>
      <v-card-text>
      <p>Mobile:{{employee.employee_detail.mobile}}</p>
      <p>Gender:{{employee.employee_detail.gender}}</p>
      <p>Dob:{{employee.employee_detail.dob}}</p>
      <p>Address:{{employee.employee_detail.address}}</p>
      </v-card-text>
      </v-card>
    </div>
    
  </v-container>
</template>

<script>
import store from "@/store";
import EditBasicInfo from "@/components/employees/EditBasicInfo.vue";
import EditDetailInfo from "@/components/employees/EditDetailInfo.vue";
export default {
  components: {
    EditBasicInfo,
    EditDetailInfo
  },

  created() {
    this.fetchData();
  },
  computed: {
    employee() {
      return store.getters.employee;
    }
  },
  beforeRouteLeave(to, from, next) {
    store.dispatch("resetEmployee", null);
    return next();
  },
  methods: {
    fetchData() {
      store.dispatch("getEmployee", this.$route.params.id);
    }
  }
};
</script>
