const url = "https://api.kawalcorona.com/indonesia/";
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
}

const vm = new Vue({
    el: '#app',
    data() {
        return{
            results : null
        }
    },
    mounted(){
        axios.get(url, config)
        .then(response => (
            this.results = response.data[0]
        ));
    }
  });