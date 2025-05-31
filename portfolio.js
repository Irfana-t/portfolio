// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_q4k075n";
//   const templateID = "template_y3a2aym";

//     emailjs.send(serviceID, templateID, params)
//     .then(res=>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("Your message sent successfully!!")

//     })
//     .catch(err=>console.log(err));

// }
function sendMail(){
    var parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_q4k075n","template_y3a2aym",parms).then(function(res){
        alert("Message Sent Succesfully");
        document.getElementById("name").value=''
        document.getElementById("email").value=''
        document.getElementById("message").value=''
    })
}