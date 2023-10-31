<template>
    <div>
        <h1 style="color:red">Hooks</h1>
        <button @click="cambiarSaludo()">
            Modificar saludo
        </button>
        <h1 style="color:fuchsia">
            {{saludo}}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "CicloVida", 
        data() {
            return {
                saludo: "Hoy es martes..."
            }
        },
        methods: {
            //AQUI DENTRO DEBEMOS INCLUIR NUESTROS METODOS PERSONALIZADOS
            cambiarSaludo() {
                //DENTRO DE LOS METODOS, PARA ACCEDER A LAS VARIABLES data()
                //DEBEMOS UTILIZAR LA PALABRA this
                this.saludo = "Y esta noche Halloween!!!!";
            }
        },
        mounted() {
            console.log("Component Montado");
        }, 
        unmounted() {
            console.log("Component destruido");
        },
        updated() {
            console.log("Component Modificado");
        }, 
        created() {
            console.log("Component Creado");
        }
    }
</script>