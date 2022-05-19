new Vue({
    el: "#app",
    created(){
        fetch(this.url)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                this.usuarios = respuesta.map(usuario => usuario.username);

                this.ordenados = this.usuarios.slice();
                this.usuarios.sort((a, b) => 0.5 - Math.random())

                this.ordenados.sort(function(a, b){
                    if (a < b) return -1;
                            if (a > b) return 1;
                            return 0;
                    })
            })
    },

    data: {
        url: 'https://jsonplaceholder.typicode.com/users',
        usuarios: [],
        guardados: [],
        ordenados: [],
        titulo: 'Inicie el juego...',
        color: '#000000',
        errores: 0
    },

    computed: {
        
    },

    methods: {
        guardar(guardado){
            
            if(this.guardados.length == 10){
                this.titulo='Finalizaste!'
                this.color= '#316c1a'
                button
            }

            if(guardado == this.ordenados[this.guardados.length]){
                this.guardados.push(guardado)
                this.titulo='Correcto'
                this.color= '#316c1a'
            }

            else{
                this.titulo='Incorrecto'
                this.color= '#DD1010'
                this.errores = this.errores + 1;
            }

            if(this.guardados.length == 10){
                this.titulo='¡Finalizaste!'
                this.color= '#316c1a'
                button
            }

        },

        reiniciar(){
            this.guardados = []
            this.titulo='Inicie el juego...'
            this.color= '#000000'
            this.usuarios.sort((a, b) => 0.5 - Math.random())
            this.errores = 0
        }

    }

});
Vue.config.devtools = true;