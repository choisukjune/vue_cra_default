const date = () =>{
  return new Date().toDateString()
}

<template>
  <h1>Home - VUE - CRA</h1>
  <h3>{date()}</h3>
</template>