<script>
export default {
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date +' '+ time;
       
      return dateTime;
    }
  }
};
</script>
<template>
  <h1>Home - VUE - CRA</h1>
  <h3>Current Date & Time: {{currentDateTime()}}</h3>
</template>