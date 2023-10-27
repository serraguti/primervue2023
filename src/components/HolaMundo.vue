<template>
    <div>
        <h1>Mi primera App VUE!!!!</h1>
        <img src="./../assets/images/batman.png"/>
        <h2>
            Su nombre es: 
            <span style="color:red">{{nombre}}</span>
        </h2>
        <h2>
            Su número es: 
            <span style="color:blue">{{numero}}</span>
        </h2>
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS 
    //DAR AL COMPONENT EN NUESTRA APLICACION VUE
    export default {
        name: "HolaMundo", 
        data() {
            //AQUI DENTRO DEBEMOS DECLARAR NUESTRAS VARIABLES
            //NO SE UTILIZAN PALABRAS ESPECIALES PARA SU DECLARACION
            //LA DECLARACION DE LAS VARIABLES SE REALIZA CON RETURN Y 
            //UN OBJETO JSON QUE CONTENDRA LAS VARIABLES Y SUS VALORES
            return {
                nombre: "Alumno", 
                numero: 14, 
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style>
    h1 { color: fuchsia}
    @import './../assets/css/estilos.css';
</style>