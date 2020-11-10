var authToken;
function loadUser(){
	firebase.auth().onAuthStateChanged(function(user){
                    console.log(user);
                    if (user != null) {
                      user.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                        authToken = idToken;
                           console.log(authToken);
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

function loadUserType(){
	fetch('https://dsconnectwebapp.azurewebsites.net/api/v1/usertype', {
	method: 'GET',
	body: '-H "accept: application/json" -H "AuthenticationToken: ' + encodeURIComponent(authToken),
	headers: {
		'Content-type': 'application/x-www-form-urlencoded'
	}
		}).then(function (response) {
			if (response.ok) {
				return response.json();
			}
			return Promise.reject(response);
		}).then(function (data) {
			console.log(data);
		}).catch(function (error) {
			console.warn('Something went wrong.', error);
		});
}
