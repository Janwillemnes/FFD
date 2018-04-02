// LOAD EXTERNAL JSON FILE & PARSE IT // 

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'http://dennistel.nl/movies', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
	  
    data.forEach(movie => {
	  
	  const card = document.createElement('div');
	  card.setAttribute('class', 'card');
		
	  const cover = document.createElement('img');
	  cover.src = movie.cover;
		
	  const genreslist = document.createElement('ul');
	  const genres = document.createElement('li');
	  genres.textContent = movie.genres;
	  
	  const title = document.createElement('h1');
	  title.textContent = movie.title;
		
	  const releaseDate = document.createElement('p');
      releaseDate.textContent = movie.release_date;
	  releaseDate.setAttribute('class', 'releasedate');

	  const heart = document.createElement('img');
	  heart.setAttribute('class', 'heart');
	  heart.src = 'images/heart-outline.svg';
	  
	  const simplePlot = document.createElement('p');
	  simplePlot.textContent = movie.simple_plot;
	
	  container.appendChild(card);
	
	  card.appendChild(cover);
	  card.appendChild(title);
	  card.appendChild(releaseDate);
	  card.appendChild(simplePlot);
		
	  card.appendChild(genreslist);
	  genreslist.appendChild(genres);
		
	  card.appendChild(heart);

    });  
  } 
}

request.send();







// FAVORITES COUNTER // 

var heartList = document.querySelectorAll(".heart");
var visualCounter = document.getElementById("favcount");
var favTotal = 0;
console.log(heartList);


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
		console.log('hello');
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

