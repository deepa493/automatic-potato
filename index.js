const axios= require('axios')

axios.get('https://api.textlocal.in/send/').then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
});