function checkLoginState(){
	FB.getLoginStatus(function(response){
		statusChangeCallback(response)

	});
}

function statusChangeCallback(response){
	if(response.status === 'connected'){
		console.log('Successfully logged in with Facebook');
	

	FB.api('/me?fields=name, first_name,picture.width(480)', changeUser);

	}
}




function changeUser(response){
 	$(".facebookLogin").hide();
   	$("h1#name").text(response.first_name);
   	$("img#photo").attr('src', response.picture.data.url);

}