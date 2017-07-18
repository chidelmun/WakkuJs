/*
	Author  : Delveri Chick
	Done  	: 2017
*/
function createForms(){
		

		
		var forms_no = document.getElementsByClassName('formlogin');
			for(var i=0 ; i< forms_no.length ; ++i){
				var username = document.createElement("input");
				username.setAttribute('placeholder', 'Username or Email');
				var password = document.createElement("input");
				password.setAttribute('placeholder', 'Your password');
				var button = document.createElement("button");
				button.setAttribute('type', 'submit');
				button.setAttribute('class', 'btn btn-success');
				button.innerHTML = "Login";
				forms_no[i].appendChild(username);
				forms_no[i].appendChild(password);
				forms_no[i].appendChild(button);
			}

		var forms  = document.getElementsByClassName('wakkuform');
			for(var i=0 ; i< forms.length ; ++i){
				if (forms[i].getAttribute("data-form-type") == "login" || "signin") {

					var loginform = '<form class="form-inline">  <div class="form-group">    <label class="sr-only" for="email">Email address:</label>    <input type="email" class="form-control" id="email">  </div>  <div class="form-group">    <label class="sr-only" for="pwd">Password:</label>    <input type="password" class="form-control" id="pwd">  </div>  <div class="checkbox">    <label><input type="checkbox"> Remember me</label>  </div>  <button type="submit" class="btn btn-default">Submit</button></form>';
					// var username = document.createElement("input");
					// username.setAttribute('placeholder', 'Username or Email');
					// var password = document.createElement("input");
					// password.setAttribute('placeholder', 'Your password');
					// var button = document.createElement("button");
					// button.setAttribute('type', 'submit');
					// button.setAttribute('class', 'btn btn-success');
					// button.innerHTML = "Login";
					// forms[i].appendChild(username);
					// forms[i].appendChild(password);
					// forms[i].appendChild(button);
					forms[i].innerHTML = loginform;
				}else if (forms[i].getAttribute('data-form-type') == "register" || "join" || "signup") {
					var username = document.createElement("input");
					username.setAttribute('placeholder', 'Username or Email');
					var password = document.createElement("input");
					password.setAttribute('placeholder', 'Your password');
					var password_confirmation = document.createElement("input");
					password_confirmation.setAttribute('placeholder', 'Confirm Your password');

					var button = document.createElement("button");
					button.setAttribute('type', 'submit');
					button.setAttribute('class', 'btn btn-success');
					button.innerHTML = "Login";
					forms[i].appendChild(username);
					forms[i].appendChild(password);
					forms[i].appendChild(password_confirmation);
					forms[i].appendChild(button);

				}
				
			}		
		 
	}
	createForms();