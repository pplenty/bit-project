var map = {};//
var user_name, user_email;
var accessToken, expiresIn, signedRequest, userID;


// Load the SDK asynchronously
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {
	  FB.init({
	    appId      : '801308976651678',
	    cookie     : true,  // enable cookies to allow the server to access 
	                        // the session
	    xfbml      : true,  // parse social plugins on this page
	    version    : 'v2.3' // use version 2.3
	  });
	  
    /*FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });*/
	  
  };
  
  
  function FBLogin() {
 	  FB.login(function() {
 		 checkLoginState();
 	  });
  }
  
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
       statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    accessToken = response.authResponse['accessToken'];
    expiresIn = response.authResponse['expiresIn'];
    signedRequest = response.authResponse['signedRequest'];
    userID = response.authResponse['userID'];
    
    if (response.status === 'connected') {
       // Logged into your app and Facebook.
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           user_name = response.name;
           user_email = response.email;
           console.log('Successful login for: ' + user_name);
           // response 객체 contain..
           // id, email, first_name, gender, last_name, 
           // link, locale, name, timezone, updated_time, verified
           checkLogin();           
        });
     } else if (response.status === 'not_authorized') {
       // The person is logged into Facebook, but not your app.
     } else {
       // The person is not logged into Facebook, so we're not sure if
       // they are logged into this app or not.
     }
  }
  
  function testLogout() {
    FB.logout(function(response) {
        // user is now logged out
        console.log("logout..");
      });
  }
  
  function checkLogin() {
	  $.ajax({
         type: 'POST',
         url: './checkLogin.do',
         async: false,
         //contentType: "application/json",
         data: {
        	 "name" : user_name,
           "email" : user_email,
           "accessToken" : accessToken,
           "expiresIn" : expiresIn,
           "signedRequest" : signedRequest,
           "userID" : userID,
         },
         dataType: 'json',
         success: function(data) {
           console.log('ajax성공');
           console.log(data);
         },
         error: function(e) {
           console.log(e);
         }
       });
  }