
import { createRouter,createWebHistory } from "vue-router";
import Index from "../pages/login/login.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Index,
        }
    ]
})
export default router;
