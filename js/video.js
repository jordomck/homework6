var video;

function getVid(){
	video = document.querySelector("#myVideo");

	
	document.getElementsByClassName("play")[0].innerHTML = "<img src=\'images/play3.png\' alt=\'\'> " + document.getElementsByClassName("play")[0].innerHTML;
	document.getElementsByClassName("pause")[0].innerHTML = "<img src=\'images/pause.png\' alt=\'\'> " + document.getElementsByClassName("pause")[0].innerHTML;
	

	// Since this is the only function that runs on startup, we 
	// must update the volume text inside this function.
	// If this were a real coding project, I would normally
	// update the HTML to call this function on load,
	// but since I'm not supposed to mess with the HTML, I'll handle 
	// this edge case during the getVid call.
	var mutedText = "";
	if(video.muted){
		mutedText = " (muted)";
	}
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%" + mutedText;

}

function updateVolume() {

	var mutedText = "";
	if(video.muted){
		mutedText = " (muted)";
	}
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%" + mutedText;
}

function playVid() { 

	console.log("Play Video");
	video.play();

} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 
	var speed = video.playbackRate;
	var newSpeed = speed * .8;
	video.playbackRate = newSpeed;
  	console.log("Speed decreased from " + speed + " to " + newSpeed);
} 

function increaseSpeed() {
	var speed = video.playbackRate;
	var newSpeed = speed + 1.25;
	video.playbackRate = newSpeed;
	console.log("Speed increased from " + speed + " to " + newSpeed);
} 

function skipAhead() {
	var currPos = video.currentTime;
	var duration = video.duration;
	var newPos = video.currentTime + 60;
	if (newPos > duration) {
		newPos = 0;
		video.playbackRate = 1;
		console.log("Reached the end of the video, starting over...")
	}
	video.currentTime = newPos;

	console.log("Current location is " + newPos);

} 

function mute() { 
	var muted = video.muted;
	muted = !muted;
	video.muted = muted;
	var buttonText = ""
  	if(muted){
  		console.log("Muted");
  		buttonText = "Unmute";
  	}
  	else{
      	console.log("Unuted");
      	buttonText = "Mute";
  	}
  	document.getElementById("mute").innerHTML = buttonText;
  	updateVolume();
}

function changeVolume() {
	var slider = document.querySelector("#volumeSlider");
	var volume = slider.value;
	var videoVolume = volume / 100;
	video.volume = videoVolume;
	console.log("Volume is " + volume + "%");
	updateVolume();
}
       

function gray() { 
	video.classList.add("grayscale");

	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
