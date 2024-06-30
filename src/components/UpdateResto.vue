<template>
    <HeaderComponent/>
    <h1>
        Hello User, Welcome on Update restaurant page
    </h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name"/>
        <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
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
    name:'UpadateResto',
    components:{
        HeaderComponent
    },
    data(){
        return{
            restaurant:{
                name:'',
                contact:'',
                address:'',
                
            }
        }
    },
    methods:{
          async updateRestaurant(){
            let result =  await axiosInstance.put("/restaurant/"+this.$route.params.id, {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address
                });
                if(result.status==200){
                    this.$router.push({name:'HomePage'});
                }
        }
    },
    async mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'LoginPage'})
        }
        let result = await axiosInstance.get('/restaurant/'+this.$route.params.id, {
                
                });
        console.warn(result.data);
        this.restaurant=result.data;
    }
}
</script>