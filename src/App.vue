<template>
 <router-view/>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

}
body{
  padding: 0;
  margin: 0;
}
.logo{
    width: 100px;
}
.register input, .login input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 10px;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    background-color: skyblue;
    color: white;
    border: 0px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 10px;
}
.register button:hover, .login button:hover, .add button:hover{
  background-color: aqua;
}
</style>
