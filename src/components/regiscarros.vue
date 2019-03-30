<template lang="html">
    <body>
<div class="container  text-center">
    <img class="" src="@/assets/taxi-driver.png">
    <h1 class="" >PERFIL CONDUCTOR</h1>
    <div class="text-left">
       <router-link to="/refresh">
     <span v-on:click="">Register if u have a new Car</span>
        </router-link>


    </div>
<table class="table table-bordered table-dark">
  <thead>
    <tr>
     <th scopre="col">#</th>
      <th scope="col">Nombre  </th>
      <th scope="col">APellido</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{{traeName[0].first_name}}</td>
      <td>{{traeName[0].last_name}}</td>
      <td>{{traeName[0].phone}}</td>
    </tr>
    
  </tbody>
</table>
<!--
    <p class="">Nombre: {{this.$store.getters.profile[0].first_name}}   Apellido: {{this.$store.getters.profile[0].last_name}}
        <br>    phone: {{this.$store.getters.profile[0].phone}}               email:{{this.$store.getters.profile[0].email}}
    </p>-->
             <h3>VEHICULOS</h3>
    <div >
       
        

<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">Placa</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dato in this.$store.getters.profile" :key="dato.id">
      <th scope="row"></th>
      <td>{{dato.marca}}</td>
      <td>{{dato.modelo}}</td>
      <td>{{dato.placa}}</td>
    </tr>
    
  </tbody>
</table>

    </div>
        
             
             
  
      </div>  

    

</body>

</template>




<script>

    import {mapState} from 'vuex';

export default {
    name:'regiscarros',
    components:'regiscarros',
    
    computed:{
       traeName(){
           return this.$store.getters.profile;
       }
    }
}


</script>

<style>

</style>

