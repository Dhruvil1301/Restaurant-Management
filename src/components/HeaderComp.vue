<template>
    <div class="nav">
       <router-link to="/">Home</router-link>
       <router-link to="/add">Add restaurant</router-link> 
       <a v-on:click="logout"  href="#">LogOut</a>  
    </div>
</template>
<script>
export default{
    name:"HeaderComponent",
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LoginPage'});
        }
    }
};
</script>

<style>
.nav{
    background-color: black;
    overflow: hidden;
}
.nav a{
    
    float: left;
    padding: 14px 16px;
    color: white;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    text-align: center;
    margin-right: 5px
    
}
.nav a:hover{
    background-color: white;
    color:black
}
</style>