const config = {
  apiKey: "AIzaSyAIJ-ATZ9hnrz1Z0nx8YhNG8eZU_fT5gnI",
  authDomain: "ds-connect.firebaseapp.com",
  databaseURL: "https://ds-connect.firebaseio.com",
  projectId: "ds-connect",
  storageBucket: "ds-connect.appspot.com",
  messagingSenderId: "418517212993",
  appId: "1:418517212993:web:7c822c37f193a001854bc0",
  measurementId: "G-Z0EZ43X166"
};
// var admin = require('firebase-admin');
// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });


 firebase.initializeApp(config);

 firebase.auth.Auth.Persistence.LOCAL; 
firebase.auth().languageCode = 'en';
var otp_form = document.getElementById("otp-form");

 $("#btn-login").click(function(){
          submitPhoneNumber()
    // var phoneNumber ="+"+$("#email").val();
    // var appVerifier = window.recaptchaVerifier;
    //   console.log(phoneNumber);
    //         console.log(appVerifier);
    //     var result = firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //     .then(function(confirmationResult) {
    //         window.confirmationResult = confirmationResult;
    //         otp_form.style.display = "block";
    //     console.log(confirmationResult);
    //       });
    
    //     console.log(result);
    //     result.catch(function(error){
    //         var errorCode = error.code; 
    //         var errorMessage = error.message; 

    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     });
    });
 function submitPhoneNumber(){

    var phoneNumber ="+"+$("#email").val();
    var appVerifier = window.recaptchaVerifier;
        var result = firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
            window.confirmationResult = confirmationResult;
           otp_form.style.display = "block";
           $("#recaptcha-container").style.display = "none";
        console.log(confirmationResult);
          });
    
        console.log(result);
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });
 }
 function loadUser(){
  var authToken;
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
$("#btn-verify").click(function(){
        var code = document.getElementById("otp").value;
        confirmationResult
          .confirm(code)
          .then(function(result) {
            var user = result.user;
            console.log(user);
          })
          .catch(function(error) {
            console.log(error);
          });
    });
$("#btn-logout").click(function(){
        var result = firebase.auth().signOut();
        result.catch(function(error){
          var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });
    });
