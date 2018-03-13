var heartList = document.querySelectorAll(".heart");
var visualCounter = document.getElementById("favcount");
var favTotal = 0;


for(var i =0; i<heartList.length; i++){
	heartList[i].addEventListener("click", like);
	heartList[i].data ="unliked";
}

function like(event){
	if (this.data=="unliked") {
		this.src="images/heart-fill.svg";
		this.data="liked";
		visualCounter.classList.toggle("bounceIn");
		countup();
	
	} else {
		this.src="images/heart-outline.svg";
		this.data="unliked";
		visualCounter.classList.toggle("bounceIn");
		countdown();
	}
		
}

function countup(){
	favTotal++;
	favCounter();	
}

function countdown(){
	favTotal--;
	favCounter();
}

function favCounter(){
	visualCounter.innerHTML = favTotal;
	
}

 