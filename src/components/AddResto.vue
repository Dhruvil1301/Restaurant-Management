<template>
    <HeaderComponent/>
    <h1>
        Hello {{ name }}, Welcome on Add Restaurant page
    </h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name"/>
        <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
    </form>
</template>
<script>
import HeaderComponent from './HeaderComp.vue'
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});
export default{
    name:'AddResto',
    components:{
        HeaderComponent
    },
    data(){
        return{
            name:'',
            restaurant:{
                name:'',
                contact:'',
                address:'',
                
            }
        }
    },
      methods:{
        async  addRestaurant(){
        console.warn(this.restaurant);
        let result =  await axiosInstance.post("/restaurant", {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address
                });
                if(result.status==201){
                    this.$router.push({name:'HomePage'});
                }
                console.warn("result",result);
      }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>