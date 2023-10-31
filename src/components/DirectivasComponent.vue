<template>
    <div>
        <h1 style="color:blue">Directivas VUE</h1>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
        <hr/>
        <label>Número: </label>
        <input type="number" v-model="numero"/>
        <h2 v-if="numero > 0" style="color:green">
                POSITIVO
        </h2>
        <h2 v-else-if="numero == 0" style="color:fuchsia">
            CERO
        </h2>
        <h2 v-else style="color:red">
            NEGATIVO
        </h2>
        <hr/>
        <label>Nombre: </label>
        <input type="text" v-model="nombre"/>
        <br/>
        <label>Edad: </label>
        <input type="number" v-model="edad"/>
        <h1 style="color:red">
            Nombre: {{nombre}}, Edad: {{edad}}
        </h1>
        <h1>
            <!-- EL SIMBOLO $ NOS PERMITE ACCEDER A CIERTOS
            ELEMENTOS DE VUE EN LA ZONA DE TEMPLATE 
            POR EJEMPLO, PODEMOS ACCEDER A TODO EL CONTENIDO DE data() -->
            {{$data}}
        </h1>
        <div v-html="evaluarNumero"></div>
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent", 
        data() {
            return {
                series: [ "Futurama", "Suits", "House of Cards", "Gen V"  ], 
                numero: 0, 
                nombre: "", 
                edad: 0
            }
        }
    }
</script>