import {createRouter, createWebHistory} from 'vue-router'
import Accueil from './../components/Accueil.vue'
import Information from './../components/Information.vue'



const routes = [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/Information', name: 'Information', component: Information},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
