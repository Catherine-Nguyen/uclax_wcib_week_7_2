jQuery(function() {

	$(document).ready(function(){
	  $("#p1").mouseenter(function(){
	    alert("Bye Heartless human being....");
	  });
		$("#p2").mouseenter(function(){
	    alert("Yay! Let's see which pet you will be adopting...");
	 	});
	});

	let my_switch = false;
		$('#my_button').click(function () {
			if ( my_switch == false) {
				my_switch = true;
				$(this).html('Click here if you want to change your mind').removeClass('btn-primary').addClass('btn-info');
				$('#my_image').attr('src','images/dogno2.png');
				alert("Yay! You're adopting a Samoyed...");

			} else {
				my_switch = false;
				$(this).html('Click here if you want to change your mind').removeClass('btn-info').addClass('btn-primary');
				$('#my_image').attr('src','images/Catno2.png');
				alert("Yay! You're adopting a Norwegian Forest Cat...");
			}
	});

	  $("button").click(function(){
	   $("#div1").fadeToggle("slow");
		});

		$('#adoption').click(function(){
	   $("#div2").fadeToggle("slow");
		});



});
