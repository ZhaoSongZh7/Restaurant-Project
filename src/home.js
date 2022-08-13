import './style.css';
import frontPageImage from './front-page-image.jpg';
import menuPage from './menu.js';
import contactPage from './contact.js';

const homePage = (() => {
    const content = document.querySelector('#content');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    document.body.style.height = '800px'
    const header = document.createElement('div');
    header.classList.add('header')
    const restaurantName = document.createElement('div');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Fresh Cook';
    const restaurantNavButtons = document.createElement('div');
    restaurantNavButtons.classList.add('restaurant-nav-buttons');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    menuButton.classList.add('menu-button');
    menuButton.textContent = 'Menu';
    contactButton.classList.add('contact-button');
    contactButton.textContent = 'Contact';
    const restaurantHoursLocationContainer = document.createElement('div');
    restaurantHoursLocationContainer.classList.add('restaurant-hours-location-container');
    const restaurantHoursTitle = document.createElement('div');
    restaurantHoursTitle.classList.add('restaurant-hours-title');
    restaurantHoursTitle.textContent = 'Hours';
    const restaurantHoursMonday = document.createElement('div');
    restaurantHoursMonday.classList.add('restaurant-hours');
    restaurantHoursMonday.textContent = 'Monday: 6am - 6pm';
    const restaurantHoursTuesday = document.createElement('div');
    restaurantHoursTuesday.classList.add('restaurant-hours');
    restaurantHoursTuesday.textContent = 'Tuesday: 6am - 6pm';
    const restaurantHoursWednesday = document.createElement('div');
    restaurantHoursWednesday.classList.add('restaurant-hours');
    restaurantHoursWednesday.textContent = 'Wednesday: 6am - 6pm';
    const restaurantHoursThursday = document.createElement('div');
    restaurantHoursThursday.classList.add('restaurant-hours');
    restaurantHoursThursday.textContent = 'Thursday: 6am - 10pm';
    const restaurantHoursFriday = document.createElement('div');
    restaurantHoursFriday.classList.add('restaurant-hours');
    restaurantHoursFriday.textContent = 'Friday: 6am - 10pm';
    const restaurantHoursSaturday = document.createElement('div');
    restaurantHoursSaturday.classList.add('restaurant-hours');
    restaurantHoursSaturday.textContent = 'Saturday: 8am - 10pm';
    const restaurantHoursSunday = document.createElement('div');
    restaurantHoursSunday.classList.add('restaurant-hours');
    restaurantHoursSunday.textContent = 'Sunday: 8am - 8pm';
    const restaurantLocation = document.createElement('div');
    restaurantLocation.classList.add('restaurant-location');
    restaurantLocation.textContent = '123 Forest Drive, Forestville, Maine';

    const restaurantDescriptionContainer = document.createElement('div');
    restaurantDescriptionContainer.classList.add('restaurant-description-container');
    const imageFrontPage = new Image();
    imageFrontPage.src = frontPageImage;
    imageFrontPage.classList.add('front-page-image');
    const restaurantDescriptionContent = document.createElement('div');
    restaurantDescriptionContent.classList.add('restaurant-description-content');
    restaurantDescriptionContent.textContent = 'Hello! Welcome to Fresh Cook. Here we serve many fresh and delicious dishes made from organic ingredients. Our famous ingredient, the Spicy Mushroom Seed, can be found in our special dishes. Enjoy our breath-taking, savory, and mouth-watering foods! Go to our menu in the top right to order.'
    
    content.appendChild(header);
    content.appendChild(restaurantDescriptionContainer);
    header.appendChild(restaurantName);
    header.appendChild(restaurantNavButtons);
    restaurantNavButtons.appendChild(homeButton);
    restaurantNavButtons.appendChild(menuButton);
    restaurantNavButtons.appendChild(contactButton);

    // Hours and Location
    content.appendChild(restaurantHoursLocationContainer);
    restaurantHoursLocationContainer.appendChild(restaurantHoursTitle);
    restaurantHoursLocationContainer.appendChild(restaurantHoursMonday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursTuesday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursWednesday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursThursday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursFriday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursSaturday);
    restaurantHoursLocationContainer.appendChild(restaurantHoursSunday);
    restaurantHoursLocationContainer.appendChild(restaurantLocation);

    // Image and Restaurant Description
    restaurantDescriptionContainer.appendChild(imageFrontPage);
    restaurantDescriptionContainer.appendChild(restaurantDescriptionContent);

    homeButton.addEventListener('click', () => {
        content.innerHTML = '';
        homePage();
    });
    
    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        menuPage();
    });
    
    contactButton.addEventListener('click', () => {
        content.innerHTML = '';
        contactPage();
    })
});

homePage();

export default homePage;