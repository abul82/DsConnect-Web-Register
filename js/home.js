var authToken;
function loadUser(){
	firebase.auth().onAuthStateChanged(function(user){
                    console.log(user);
                    if (user != null) {
                      user.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                        authToken = idToken;
                           console.log(authToken);
                           loadUserType();
                          }).catch(function(error) {
                            // Handle error
                          });
                    user.providerData.forEach(function (profile) {
                        console.log(profile);
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                    }else{
                        console.log("User is NUll");
                    }
                   });
}
		        // header : 'Access-Control-Allow-Origin',
function loadUserType(){
		var loop=true;
		var val = "application/json";
		 	if(loop==true)
		    {
		        $.ajax({
		        url: 'https://dsconnectwebapp.azurewebsites.net/api/v1/usertype',
		        type: 'GET',
		        data: {AuthenticationToken:authToken},
		        error: function() {

		        	alert('Something is wrong');
		        },
		        success: function(data)
		        {
		         console.log(data);
		        }
		        });
	}
	// var request = new XMLHttpRequest()

	// 	request.open('GET', 'https://dsconnectwebapp.azurewebsites.net/api/v1/usertype', true)
	// 	request.onload = function () {
	// 	  // Begin accessing JSON data here
	// 	  var data = JSON.parse(this.response)

	// 	  if (request.status >= 200 && request.status < 400) {
	// 	    data.forEach((movie) => {
	// 	      console.log(movie.title)
	// 	    })
	// 	  } else {
	// 	    console.log('error')
	// 	  }
	// 	}

	// 	request.send()
	// fetch('https://dsconnectwebapp.azurewebsites.net/api/v1/usertype', {
	// method: 'GET',
	// body: '-H "accept: application/json" -H "AuthenticationToken: ' + encodeURIComponent(authToken),
	// headers: {
	// 	'Content-type': 'application/x-www-form-urlencoded'
	// }
	// 	}).then(function (response) {
	// 		if (response.ok) {
	// 			return response.json();
	// 		}
	// 		return Promise.reject(response);
	// 	}).then(function (data) {
	// 		console.log(data);
	// 	}).catch(function (error) {
	// 		console.log('Something went wrong.', error);
	// 	});
}
