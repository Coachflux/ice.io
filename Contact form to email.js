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
    From : "",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Successful", "You clicked the button!", "success");
  	}
  }
);
}
