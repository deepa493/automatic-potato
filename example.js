var sms=require('.')

var username = " ";
var hash = " ";
var sender = " ";
var message=" ";
var numbers = " ";
var test="0";
var group=" "



async function main(){
    var credit= await sms.getCredicts(username,hash);
    console.log(credit);
    var send_result=await sms.sendSms(username,hash,sender,numbers,message,test);
    console.log(send_result);
    var contacts= await sms.injectContacts(username,hash,group,message,numbers);
    console.log(contacts);
}


main()
