<template lang="html">
  <div class="container signup" id="content">
    <flash-message v-if="err" class="" autoHide variant="danger" transitionIn="animated rubberBand"></flash-message>
      <div class="row p-4">
        <div class="col-md-10 col-lg-5 mx-auto">
          <div class="card shadow-lg bg-white">
            <div class="card-header">
              <h2>Sign Up</h2>
            </div>
            <div class="card-body">
              <form v-on:submit.prevent="register()">
                <div class="form-group">
                  <input type="text" v-model="driver.fname"  class="form-control" required="required" placeholder="First Name">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.lname" class="form-control" placeholder="Last Name">
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">+57</div>
                  </div>
                  <input type="number" v-model="driver.phone" class="form-control" id="inlineFormInputGroupUsername" placeholder="Phone">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="number" v-model="driver.credit_card" class="form-control" placeholder="Credit Card">
                </div>
                <div class="form-group">
                  <input type="password" v-model="driver.password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                  <input type="password" v-model="driver.passConf" class="form-control" placeholder="Password Confirmation">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.dir" class="form-control" placeholder="Direction">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.marca" class="form-control" placeholder="marca">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.modelo" class="form-control" placeholder="modelo">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.numsoat" class="form-control" placeholder="numero soat">
                </div>
                <div class="form-group">
                  <input type="text" v-model="driver.placa" class="form-control" placeholder="placa">
                </div>
                <div class="form-group">
                  <input type="number" v-model="driver.anho" class="form-control" placeholder="año">
                </div>

                <div class="form-group">
                  <button   class="btn btn-warning btn-block">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>


import {mapActions} from 'vuex';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  data(){
    return{
      driver: {
        fname: null,
        lname: null,
        phone: null,
        email: null,
        credit_card: null,
        password: null,
        passConf: null,
        dir:null,
        marca:null,
        modelo:null,
        numsoat:null,
        placa:null,
        anho: null

        
      },
      err: false
    }
  },
  methods: {
    register(){
      this.$store.dispatch('api_register', this.driver)
      .then(response => {
        this.flashMe({ message: 'some message', variant: 'success' });
        this.$router.push({name: 'login'});
        alert("hola mundo");
        
       
      })
      .catch(err => {
        this.err = true;
        this.flashMe({ message: 'some message', variant: 'danger' });
      })
    },
   actstate(){
      $store.dispatch('actualiza_driver',this.driver);
      this.flashMe({message:'la puta madre',vairant:'info'});
    }
  },

  computed:{
      vuex:mapState(['profile'])
  },
  
  updated(){
    setTimeout(() => {
      this.err = false;
    }, 1500);
  }
}
</script>

<style lang="css">
  .signup{
    margin-top: 50px;
  }
</style>
