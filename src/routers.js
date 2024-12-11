import ListPatients from "./components/ListPatients.vue"
import AddPatient from "./components/AddPatient.vue"
import NavigationBar from "./components/NavigationBar.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes=[
    {
        name:"ListPatients",
        component:ListPatients,
        path:'/list-patient'
    },
    {
        name:"AddPatient",
        component:AddPatient,
        path:'/add-patient'
    },
    {
        name:"NavigationBar",
        component:NavigationBar,
        path:'/navigation-bar'
    },
   
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router