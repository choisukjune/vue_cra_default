<script>
export default {
  data() {
    return {
        now: ""
    }
  },
  methods: {
    currentDateTime() {
      var _this = this;


      setInterval(()=>{
      
        var current = new Date();
        var date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
        var time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        var dateTime = date +' '+ time;
        
        _this.now = dateTime;

      },1000);
    },
  }
  , mounted(){
      this.currentDateTime();
    }
};
</script>
<template>
  <h1>Home - VUE - CRA</h1>
  <h3>Current Date & Time: {{now}}</h3>
</template>