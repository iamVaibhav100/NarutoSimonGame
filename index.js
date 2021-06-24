$(document).on('keypress' , start);
function start() {
	$('#red').addClass("pressed");
	setTimeout(function() {
		$('#red').removeClass("pressed");
	} , 300);
	var r = new Audio("sounds/red.mp3");
	r.play();
	

}

function gB() {
	$('#green').addClass("pressed");
	setTimeout(function() {
		$('#green').removeClass("pressed");
	} , 300);
	var g = new Audio("sounds/green.mp3");
	g.play();
}

$('#red').click(function() {
	start();
	setTimeout(function() {
		gB();
	} , 300);
} )