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
 firebase.initializeApp(config);

 firebase.auth.Auth.Persistence.LOCAL; 
firebase.auth().languageCode = 'en';

 $("#btn-login").click(function(){
        // var email = $("#email").val();
        // var password = $("#password").val(); 
         firebase.auth().settings.appVerificationDisabledForTesting = true;
  // var phoneNumber =$("#email").val();
  var phoneNumber = "+911234567890";
var testVerificationCode = "123456";
    var appVerifier = window.recaptchaVerifier;
      console.log(phoneNumber);
            console.log(appVerifier);
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // confirmationResult can resolve with the fictional testVerificationCode above.
      return confirmationResult.confirm(testVerificationCode)
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
    //     var phoneNumber =$("#email").val();
    // var appVerifier = window.recaptchaVerifier;
    //   console.log(phoneNumber);
    //         console.log(appVerifier);
    //     var result = firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //     .then(function(confirmationResult) {
    //         window.confirmationResult = confirmationResult;
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
  firebase.auth().settings.appVerificationDisabledForTesting = true;
  // var phoneNumber =$("#email").val();
  var phoneNumber = "+911234567890";
var testVerificationCode = "123456";
    var appVerifier = window.recaptchaVerifier;
      console.log(phoneNumber);
            console.log(appVerifier);
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // confirmationResult can resolve with the fictional testVerificationCode above.
      return confirmationResult.confirm(testVerificationCode)
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
        // var result = firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        // .then(function(confirmationResult) {
        //     window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        //   });
    
        // console.log(result);
        // result.catch(function(error){
        //     var errorCode = error.code; 
        //     var errorMessage = error.message; 

        //     console.log(errorCode);
        //     console.log(errorMessage);
        // });
 }

$("#btn-logout").click(function(){
        var result = firebase.auth().signOut();
        result.catch(function(error){
          var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });
    });
