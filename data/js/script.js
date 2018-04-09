// LOAD EXTERNAL JSON FILE & PARSE IT // 

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const list = document.createElement('ol');
list.setAttribute('class', 'content');

var movieID = 1;

function checkMovieID (){
	if (movieID == 6) {
		movieID = 1;
	} else {
		movieID + 1;
	};
};

const buttonRight = document.getElementById('button_right');
buttonRight.addEventListener("click", next);

const buttonLeft = document.getElementById('button_left');
buttonLeft.addEventListener("click", previous);

function removeMovie () {
	list.innerHTML = "";
};

function previous () { 
	if (movieID < 2) {
		removeMovie();
		movieID = 5;
		requestNewMovie();
	} else {
		removeMovie();
		movieID = movieID - 1;
		requestNewMovie();
	}
};

function next () {
	if (movieID > 5) {
		removeMovie();
		movieID = 1;
		requestNewMovie();
	} else {
		removeMovie();
		movieID = movieID + 1;
		requestNewMovie();
	}
};

app.appendChild(container);
container.appendChild(list);

function requestNewMovie () {
	var request = new XMLHttpRequest();

	request.open('GET', 'http://dennistel.nl/movies/' + movieID, true);
	request.onload = function () {

	  var movie = JSON.parse(this.response);

	  if (request.status >= 200 && request.status < 400) {

		  const card = document.createElement('li');
		  card.setAttribute('class', 'card');
		  list.appendChild(card);

		  const cover = document.createElement('img');
		  cover.src = movie.cover;
		  cover.setAttribute('class', 'cover');
		  card.appendChild(cover);

		  const title = document.createElement('h1');
		  title.textContent = movie.title;
		  card.appendChild(title);
		  
		  const heart = document.createElement('img');
		  heart.setAttribute('class', 'heart');
		  heart.src = 'images/heart-outline.svg';
		  card.appendChild(heart);
		  
		  const details = document.createElement('div');
		  details.setAttribute('id', 'container-details');
		  card.appendChild(details);
		  
		  const cover_small = document.createElement('img');
		  cover_small.src = movie.cover;
		  cover_small.setAttribute('class', 'cover-small');
		  details.appendChild(cover_small);
		  
		  const releaseDate = document.createElement('p');
		  releaseDate.textContent = movie.release_date;
		  releaseDate.setAttribute('class', 'releasedate');
		  details.appendChild(releaseDate);
		  
		 
		  const directorslist = document.createElement('ul');
		  details.appendChild(directorslist);
		  movie.directors.forEach(director =>{
			  var directors = document.createElement('li');
			  directors.textContent = director;
			  directorslist.appendChild(directors);
			  console.log(director);
		 

		  const genreslist = document.createElement('ul');
		  details.appendChild(genreslist);
		  movie.genres.forEach(thema =>{
			  var genres = document.createElement('li');
			  genres.textContent = thema;
			  genreslist.appendChild(genres);
			  console.log(movie.genres);
		});

		  const simplePlot = document.createElement('p');
		  simplePlot.textContent = movie.simple_plot;
		  simplePlot.setAttribute('class', 'simple_plot');
		  details.appendChild(simplePlot);
		  
		  const cast = document.createElement('img');
		  cast.src = 'images/kit.jpg';
		  cast.setAttribute('class', 'castmember');
		  details.appendChild(cast);


		checkHeart();

	  } 
	}

	request.send();
}

requestNewMovie();


// FAVORITES COUNTER // 

var visualCounter = document.getElementById("favcount");
var favTotal = 0;

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

function checkHeart(){
		heartList = document.querySelectorAll(".heart");
		for(var i =0; i<heartList.length; i++){
		heartList[i].addEventListener("click", like);
		heartList[i].data ="unliked";
	}
}

function countup(){
	favTotal++;
	favCounter();	
}[]

function countdown(){
	favTotal--;
	favCounter();
}

function favCounter(){
	visualCounter.innerHTML = favTotal;
}




