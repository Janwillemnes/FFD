// LOAD EXTERNAL JSON FILE & PARSE IT // 

const app = document.getElementById('root');

var movieID = 2;

function checkMovieID (){
	if (movieID == 6) {
		movieID = 1;
	} else {
		movieID + 1;
	};
};

const card = document.createElement('div');
	  card.setAttribute('class', 'card');
	  app.appendChild(card);

const buttonRight = document.getElementById('button_right');
	  buttonRight.addEventListener("click", next);

const buttonLeft = document.getElementById('button_left');
	  buttonLeft.addEventListener("click", previous);


function removeMovie () {
		card.innerHTML = "";
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


function requestNewMovie () {
	var request = new XMLHttpRequest();

	request.open('GET', 'http://dennistel.nl/movies/' + movieID, true);
	request.onload = function () {

	  var movie = JSON.parse(this.response);

	  if (request.status >= 200 && request.status < 400) {


		  const cover = document.createElement('img');
		  cover.src = movie.cover;
		  cover.setAttribute('class', 'cover');
		  card.appendChild(cover);
		  
		  const wrapper = document.createElement('div');
		  wrapper.setAttribute('class', 'like-wrapper');
		  card.appendChild(wrapper);

		  const title = document.createElement('h1');
		  title.textContent = movie.title;
		  wrapper.appendChild(title);
		  
		  const heart = document.createElement('img');
		  heart.setAttribute('class', 'heart');
		  heart.src = 'images/heart-outline.svg';
		  wrapper.appendChild(heart);
		  
		  const details = document.createElement('div');
		  details.setAttribute('id', 'container-details');
		  card.appendChild(details);
		  
		  const cover_small = document.createElement('img');
		  cover_small.src = movie.cover;
		  cover_small.setAttribute('class', 'cover-small');
		  details.appendChild(cover_small);
		  
		  const sideInfo = document.createElement('div');
		  sideInfo.setAttribute('class', 'side-info');
		  details.appendChild(sideInfo);
		  
		  const secondTitle = document.createElement('h2');
		  secondTitle.textContent = movie.title;
		  sideInfo.appendChild(secondTitle);
		  
		  const releaseDate = document.createElement('p');
		  releaseDate.textContent = movie.release_date;
		  releaseDate.setAttribute('class', 'releasedate');
		  sideInfo.appendChild(releaseDate);
		 
		  const genreslist = document.createElement('ul');
		  genreslist.setAttribute('class', 'genres');
		  sideInfo.appendChild(genreslist);
		  movie.genres.forEach(thema =>{
			  var genres = document.createElement('li');
			  genres.textContent = thema;
			  genreslist.appendChild(genres);
		  });

		  const simplePlot = document.createElement('p');
		  simplePlot.textContent = movie.simple_plot;
		  simplePlot.setAttribute('class', 'simple_plot');
		  details.appendChild(simplePlot);

		  const actorslist = document.createElement('ul');
		  actorslist.setAttribute('class', 'castmembers');
          details.appendChild(actorslist);
          movie.actors.forEach(actor =>{
           
          var actorNode = document.createElement('li');

		  /* Links broken in JSON file.... using actors without url
		  actorNode.innerHTML = "<div><img src='" +actor.url_photo+"'></div><a href='" +actor.url_character+"'><p>"+actor.actor_name+"</p></a>"; */
		  actorNode.innerHTML = "<div><img src='" +actor.url_photo+"'></div><p>"+actor.actor_name+"</p>";
			  
          actorslist.appendChild(actorNode);
          

          });

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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

