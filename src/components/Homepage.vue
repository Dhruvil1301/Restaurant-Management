<template>
    <HeaderComponent />
    <h1>
        Hello {{ name }}, Welcome on Home page
    </h1>
    <table class="restaurant-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td>
                    <router-link :to="'/update/'+item.id" class="action-link">Update</router-link>
                    <button v-on:click="deleteRestaurant(item.id)" class="action-button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import HeaderComponent from './HeaderComp.vue';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: [],
        };
    },
    components: {
        HeaderComponent
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axiosInstance.delete('/restaurant/' + id);
            if (result.status === 200) {
                alert("Restaurant Deleted");
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if (user) {
                this.name = JSON.parse(user).name;
            } else {
                this.$router.push({ name: 'LoginPage' });
            }
            try {
                let result = await axiosInstance.get('/restaurant');
                console.warn(result);
                this.restaurants = result.data;
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        }
    },
    async mounted() {
        this.loadData();
    }
};
</script>

<style>
.restaurant-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.restaurant-table th, .restaurant-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.restaurant-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.restaurant-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.restaurant-table tr:hover {
    background-color: #f1f1f1;
}

.restaurant-table th, .restaurant-table td {
    text-align: center;
}

.action-link {
    color: #3498db;
    text-decoration: none;
    margin-right: 10px;
}

.action-link:hover {
    text-decoration: underline;
}

.action-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
}

.action-button:hover {
    background-color: #c0392b;
}
</style>
