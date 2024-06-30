import Homepage from "./components/Homepage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Loginpage.vue";
import AddResto from "./components/AddResto.vue";
import UpdateResto from "./components/UpdateResto.vue";
import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
    {
        name:'HomePage',
        component:Homepage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'AddResto',
        component:AddResto,
        path:'/add'
    },
    {
        name:'UpdateResto',
        component:UpdateResto,
        path:'/update/:id'
    }
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});
export default router

