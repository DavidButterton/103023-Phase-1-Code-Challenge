// create a variable and assing the json API
const filmAPI = `http://localhost:3000/films`;
//grab the movie title element and assign a variable
const movieTitle = document.getElementById('title');
//grab the image element and assign a variable
const filmPosterImage = document.getElementById('poster');
//grab the runtime element and assign a variable
const filmRuntime = document.getElementById('runtime');
//grab the movie description element and assign a variable
const filmDescription = document.getElementById('film-info')
//grab the showtime element and assign a variable
const showtime = document.getElementById('showtime');
//grab the ticket number element and assign a variable
const remainingTickets = document.getElementById('ticketnum')
//grab the films element and asssign a varaible
const filmList = document.getElementById('films')
//grab the buy ticket element and assign it to a varaible
const buyTicket = document.getElementById('buy-ticket')


//write a fetch function to grab all of the API's
fetch(filmAPI)
//json promise
.then(res => res.json())
//send promise to function
.then(movieTitleList)

//write a function for the movieTitleList
function movieTitleList(titles) {
    //clear the innerHTML
    filmList.innerHTML = '';
    //write a forEach function to iterate through the API list and pass a function
    titles.forEach(renderTheTitles)
}
//write a function to render the titles
function renderTheTitles(titleList) {
    //create a list element for each item and assign a varaible
    const listItem = document.createElement('li');
    //add the text content of the titles to the list
    listItem.textContent = titleList.title;
    //append the li to the ul
    filmList.append(listItem);
}


//write a fetch function to grab the /1 film
fetch(`${filmAPI}/1`)
    //write a json promise
    .then(res => res.json())
    //write a promise and pass it to a function
    .then(renderfilmShowing)

//write a function to render film content to current film showing
function renderfilmShowing(film) {
    //add textcontent to the title from the API /1
    movieTitle.textContent = film.title
    //add img src from API to the function parameter for title
    filmPosterImage.src = film.poster
    //add text content from API to the function parameter for runtime
    filmRuntime.textContent = film.runtime
    //add textcontent from API to the function parameter for description
    filmDescription.textContent = film.description
    //add textcontent from API to the fuction parameter for showtime
    showtime.textContent = film.showtime
    //write a function to subtract film capacity from tickets sold
    let availableTickets = film.capacity - film.tickets_sold;
    //Add text content from API to parameter for tickets remaining subtracting capcity from tickets remaining
    remainingTickets.textContent = availableTickets
    //add an event listener to the variable buyTicket with click and pass a function
    buyTicket.addEventListener('click', handleTicketPurchase);

    function handleTicketPurchase(e) {
        e.preventDefault
        if (availableTickets > 0) {
            availableTickets --;
            availableTickets.textContent = remainingTickets;
        } else {
            window.alert('sold out')
        }
    }
}