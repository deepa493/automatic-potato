const axios= require('axios');



module.exports.getCredicts=async function(username,hash){
    
    var credit=await axios.get("http://api.textlocal.in/balance/?username="+username+
    "&hash="+hash)
    return credit.data 
}

module.exports.sendSms=async function(username,hash,sender,numbers,message,test){
    var send_result=await axios.get("http://api.textlocal.in/send/?username="+username+
    "&hash="+hash+"&sender="+sender+"&message="+message+"&numbers="+numbers+"&test="+test)
    return send_result.data
}
module.exports.injectContacts=async function (username,hash,group,message,numbers){
   var contacts=await  axios.get("http://api.textlocal.in/create_contacts/?username="+username+
    "&hash="+hash+"&group="+group+"&message="+message+"&numbers="+numbers)
    return contacts.data
}



