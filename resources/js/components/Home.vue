<template>

  <p>home</p>
</template>
<script>
  export default {

  methods:{

      cs(){

          axios.get("../api/index").then(function (response){

              console.log(response);

          }).catch(function (error){

              console.log(error);

          })

      }

  },

  mounted() {

      this.cs();

  }}
</script>
  <style scoped>
  </style>
