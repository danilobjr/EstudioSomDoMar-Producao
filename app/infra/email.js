var emailjs = require("emailjs/email");

var server  = emailjs.server.connect({
   user:    "danilo.emailteste", 
   password:"daniloemailteste123456", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

//var message = {
//   text:    "i hope this works", 
//   from:    "you <username@gmail.com>", 
//   to:      "someone <someone@gmail.com>, another <another@gmail.com>",
//   cc:      "else <else@gmail.com>",
//   subject: "testing emailjs",
//   attachment: 
//   [
//      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
//      {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
//   ]
//};

// send the message and get a callback with an error or details of the message that was sent
exports.enviar = function (de, para, assunto, mensagem, callback) {
    var email = {
        from: de,
        to: para,
        subject: assunto,
        text: mensagem
    }

    server.send(email, function (erro, result) {
        //console.log(erro || message);
        if (erro) {
            callback(erro);
        } else {
            callback(undefined, result);
        }
    });
};