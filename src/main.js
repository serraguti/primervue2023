import { createApp } from 'vue'
import App from './App.vue'
//IMPORTAMOS LA CONSTANTE router DE Router.js
import router from './Router';

//DEBEMOS SEPARAR CREATE APP EN UNA VARIABLE
var app = createApp(App)

app.config.globalProperties.$filters = {
    //AQUI TENDREMOS LOS METODOS GLOBALES DE NUESTRA APP
    mayuscula(dato) {
        return dato.toUpperCase();
    },
    getNumeroDoble(numero) {
        return numero * 2;
    }
}

app.use(router).mount('#app')
