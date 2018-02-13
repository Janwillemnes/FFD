heartList = document.querySelectorAll(".heart");

console.log(heartList)

for(var i =0; i<heartList.length; i++){
	heartList[i].addEventListener("click", like);
	heartList[i].data ="unliked";
}

function like(event){
	if (this.data=="unliked") {
		this.src="images/heart-fill.svg";
		this.data="liked";
	
	} else {
		this.src="images/heart-outline.svg";
		this.data="unliked";
	}
		
}