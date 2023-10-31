<template>
    <div>
        <h1>Ejemplo Número par impar</h1>
        <label>Número: </label>
        <input type="number" v-model="numero"/>
        <button @click="getEvaluarNumero()">
            Evaluar Número
        </button>
        <h3 v-if="numero % 2 == 0" style="color:blue">
            Número PAR: {{numero}}
        </h3>
        <h3 v-else style="color:brown">
            Número IMPAR: {{numero}}
        </h3>

        <div v-html="html"></div>
        <div v-html="evaluarNumero"></div>
        <h2>
            Número {{numero}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "NumeroParImpar", 
        methods: {
            getEvaluarNumero() {
                if (this.numero % 2 == 0){
                    this.html = "<h1 style='color:fuchsia'>Par: " 
                    + this.numero + "</h1>";
                }else{
                    this.html = "<h1 style='color:orange'>Impar: " 
                    + this.numero + "</h1>";
                }
            }
        },
        computed: {
            evaluarNumero() {
                var data = "";
                if (this.numero % 2 == 0){
                    data = "<h1 style='color:green'>Par: " + 
                    this.numero + "</h1>";
                }else{
                    data = "<h1 style='color:red'>Impar: " + 
                    this.numero + "</h1>";
                }
                return data;
            }
        },
        data() {
            return {
                numero: 0, 
                html: ""
            }
        }
    }
</script>