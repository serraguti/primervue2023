import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import NumeroParImpar from './components/NumeroParImpar.vue';
import MetodosFilters from './components/MetodosFilters.vue';

//CREAMOS UNA CONSTANTE ARRAY PARA NUESTRAS RUTAS
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/musica", component: MusicaComponent
    }, 
    {
        path: "/cine", component: CineComponent
    }, 
    {
        path: "/hooks", component: CicloVida
    }, 
    {
        path: "/directivas", component: DirectivasComponent
    }, 
    {
        path: "/conmutadas", component: PropiedadConmutada
    }, 
    {
        path: "/parimpar", component: NumeroParImpar
    }, 
    {
        path: "/filters", component: MetodosFilters
    }
]
//CREAMOS UNA CONSTANTE PARA EL HISTORIAL Y EL ARRAY DE RUTAS
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
//POR ULTIMO, EXPORTAMOS LA CONSTANTE router
export default router;