const url = 'https://api.nobelprize.org/2.1/nobelPrizes';

// Select the root element in the HTML 
const app = document.getElementById('root');


// Create a container div to display each prize winner
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Append the logo and container to the root element

app.appendChild(container);

// Fetch nobel prizes data from an external API
fetch(url)
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    // write nobel prizes data to the console    
     return console.log(data); 
    
  })
  .catch(function(error) {
    // Display an error message if the fetch fails
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Error: ${error.message}`;
    app.appendChild(errorMessage);
  });