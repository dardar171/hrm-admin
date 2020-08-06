<template>
  <v-app id="inspire">
    <p class="alert alert-danger" v-if="error">{{errorMessage}}</p>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Su Nandar Aung</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="email"
                    v-model="email"
                    prepend-icon="mdi-account"
                    type="email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import store from "@/store";
import { myMixin } from "@/mixins/exampleMixin.js";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import router from '@/router'
export default {
  mixins: [myMixin, validationMixin],
  validations: {
    email: {
      required,
      minLength: minLength(4),
      email
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  computed: {
    emailErrors() {
      var errorMessages = [];
      if (!this.$v.email.$dirty) {
        return errorMessages;
      }
      if (!this.$v.email.required) {
        errorMessages.push("Email is required");
      }
      if (!this.$v.email.minLength) {
        errorMessages.push("Email must be at least 4 characters");
      }
      return errorMessages;
    },
        passwordErrors(){
      var errorMessages=[];
      if(!this.$v.password.$dirty){
        return errorMessages;
      }
      if(!this.$v.password.required){
        errorMessages.push("Password is required");
      }
      if(!this.$v.password.minLength){
        errorMessages.push("Password must be at least 4 characters")
      }
      return errorMessages;
    }
  },
  data() {
    return {
      email: null,
      password: null,
      error: false,
      errorMessage: null
    };
  },

  methods: {
    async onSubmit() {
      this.error = false;
      this.errorMessage = null;
      var data = {
        // email:"jj@gmail.com",
        // password:"jj1234"
        email: this.email,
        password: this.password
      };
      console.log(data);

      try {
        await store.dispatch("login", data);
        alert("success");
        this.email = null;
        this.password = null;
        router.push("/")
      } 
      catch{
        alert("Error")
      }
    }
  },
  props: {
    source: String
  }
};
</script>

<style>
</style>