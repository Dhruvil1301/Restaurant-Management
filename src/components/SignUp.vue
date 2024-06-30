<template>
    <img class="logo" src="../assets/resto.jpg" />
    <h1>
       SignUp 
    </h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">
             Login
            </router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});
export default{
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp() {
            try {
                let result = await axiosInstance.post("/users", {
                    email: this.email,
                    password: this.password,
                    name: this.name
                });
                console.warn(result);
                if (result.status == 201) {
                   
                    alert("Sign Up Successfully");
                    localStorage.setItem("user-info",JSON.stringify(result.data));
                    this.$router.push({name:'HomePage'})
                }


            } catch (error) {
              console.error('Error during sign up:', error);
                alert('Failed to sign up. Please try again.');
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }
};
</script>
<style>

</style>