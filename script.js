

        var cookieName     = 'cookies-consent';   
        var cookieDuration = 5; 
        var cookieValue    = 'yes';
        var dropCookie     = true;

	function checkCookie(name) {
	  var nameEQ = name + "=";
	  var ca     = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
        }


	function banneractivate(){

	  //console.log('divonload');
			  
          var banner=document.getElementById("cookiebanner");
          //console.log('banner =',banner);

			  
	  if(checkCookie(window.cookieName) != window.cookieValue){
	    if (banner){
	      banner.style.display='inline';
	    }
	  }else{
	    if (banner){
	      banner.style.display='none';
	    }
          }			  

        }


			  
        function createCookie(name,value,days) {
          if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000)); 
            var expires = "; expires=" + date.toGMTString(); 
          }
          else var expires = "";

	  if(window.dropCookie) {
            var ck = name+"="+value+expires+"; path=/";
            //console.log('Cookie: ',ck);			  
            document.cookie = ck;
          }
        }



        function bannerclickyes() {

              //console.log('Ja geklickt');

              createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
			  
	      var banner=document.getElementById("cookiebanner");
			  
              //console.log('banner =',banner);


	      if (banner){
			  banner.style.display='none';
			  //console.log('innendrin');
	      }

        }

			  
	window.addEventListener("load", banneractivate, true);




	
