<template>
    <img class="logo" src="../assets/resto.jpg" />
    <h1>
       Login
    </h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">
             Sign Up
            </router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                let result = await axiosInstance.get(`/users`, {
                    params: {
                        email: this.email,
                        password: this.password
                    }
                });
                console.warn(result);
                if (result.status === 200 && result.data.length > 0) {
                    alert("Login Successfully");
                    localStorage.setItem("user-info", JSON.stringify(result.data[0])); // Store the first user object
                    this.$router.push({ name: 'HomePage' });
                } else {
                    alert('Invalid credentials');
                }
            } catch (error) {
                console.error('Error during Login:', error);
                alert('Failed to Login. Please try again.');
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' });
        }
    }
};
</script>

<style>
.logo {
    width: 100px;
}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.login button {
    width: 320px;
    height: 40px;
    background-color: skyblue;
    color: white;
    border: 0px;
    font-weight: 700;
    cursor: pointer;
}
</style>
