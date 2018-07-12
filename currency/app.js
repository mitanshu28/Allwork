var axios = require('axios');
axios.get('')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});