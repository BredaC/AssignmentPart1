document.addEventListener('DOMContentLoaded', function () {
   
  fetchNobelPrizes();       
  
});
const url = 'https://api.nobelprize.org/2.1/nobelPrizes';

async function fetchNobelPrizes() {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');  
   
// Append content to the root
const app = document.getElementById('root');

//Create an image element for the logo and set its source
const logo = document.createElement('img');
logo.src = 'logo.jpg';

// Append the logo and container to the root element
app.appendChild(logo);
app.appendChild(container);


try {  
  const response = await fetch('url');
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
const data = await response.json();
//Create a card to display each nobel prize winner
data.forEach(data =>{
  const nobelCard = document.createElement('div');
  nobelCard.setAttribute('class', 'nobelCard');

  const year = document.createElement('h1');
  year.textContent = `Year ${data.nobelPrizes.awardYear}`;

  const winner = document.createElement('p');
  winner.textContent = `Winner: ${data.nobelPrizes.laureates.fullName.en}`;

  const id = document.createElement('p');
  id.textContent = `ID: ${data.nobelPrizes.laureates.id}`;

  const category = document.createElement('p');
  category.textContent = `Category: ${data.nobelPrizes.category}`;
    
  const awardedFor = document.createElement('p');
  awardedFor.textContent = `Awarded For: ${data.nobelPrizes.laureates.motivation.en}`;
   
  nobelCard.appendChild(year);
  nobelCard.appendChild(winner);
  nobelCard.appendChild(id);
  nobelCard.appendChild(category);
  nobelCard.appendChild(awardedFor);
  container.appendChild(nobelCard);
});
}
catch(error){
 // Handle any rejection from `fetch` or `response.json()`
 console.error('Error fetching or rendering NobelPrizes:', error);
 container.innerHTML += `<p>Error: ${error.message || error}</p>`;
}
}
//Allow user to select prize category they're interested in
document.getElementById('getCategoryButton').addEventListener('click', async () => {
  const selectedCategories = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          selectedCategories.push(checkboxes[i].value);
      }
  }
  const filteredCategories = [];
  for (let i = 0; i < selectedCategories.length; i++) {
      const result = await fetchNobelPrizes(selectedCategories[i]);

      selectedCategories.forEach(selectedCategories =>{
        const nobelCard = document.createElement('div');
        nobelCard.setAttribute('class', 'nobelCard');
      
        const year = document.createElement('h1');
        year.textContent = `Year ${data.nobelPrizes.awardYear}`;
      
        const winner = document.createElement('p');
        winner.textContent = `Winner: ${data.nobelPrizes.laureates.fullName.en}`;
      
        const id = document.createElement('p');
        id.textContent = `ID: ${data.nobelPrizes.laureates.id}`;
      
        const category = document.createElement('p');
        category.textContent = `Category: ${data.nobelPrizes.category}`;
          
        const awardedFor = document.createElement('p');
        awardedFor.textContent = `Awarded For: ${data.nobelPrizes.laureates.motivation.en}`;
        
        //Appends the data to the card 
        nobelCard.appendChild(year);
        nobelCard.appendChild(winner);
        nobelCard.appendChild(id);
        nobelCard.appendChild(category);
        nobelCard.appendChild(awardedFor);
        container.appendChild(nobelCard);
      })

  }
})

 
    

