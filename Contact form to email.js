function emailSend(){

	var username = document.getElementById('username').value;
	var address = document.getElementById('address').value;
	var email = document.getElementById('email').value;

	var messageBody = "Username " + username +
	"<br/> Address " + address +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "host@gmail.com",
    Password : "Password",
    To : 'icenetworklab@gmail.com',
    From : "website@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
