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
  .then(data=>{
    //Write Nobel Prizes to the console
    console.log('Nobel Prizes');
    console.log('Year:',data.nobelPrizes[0].awardYear);
    console.log('Winner:',data.nobelPrizes[0].laureates[0].fullName.en);    
    console.log('ID:',data.nobelPrizes[0].laureates[0].id);
    console.log('Category:',data.nobelPrizes[0].category.en);  
    console.log('Awarded For:',data.nobelPrizes[0].laureates[0].motivation.en); 
    
  })
  .catch(function(error) {
    // Display an error message if the fetch fails
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Error: ${error.message}`;
    app.appendChild(errorMessage);
  });
