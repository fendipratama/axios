const url = "https://api.kawalcorona.com/indonesia/";
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
}

const vm = new Vue({
    el: '#app',
    data: {
        results : []
    },
    mounted(){
        axios.get(url, config)
        .then(function(response){
            this.results = response.data;
            console.log(response.data[0]);
        });
    }
  });