import './style.css';
import restaurantFoodImage1 from './restaurant-food-image-1.png';
import restaurantFoodImage2 from './restaurant-food-image-2.jpg';
import restaurantFoodImage3 from './restaurant-food-image-3.png';
import homePage from './home.js';
import contactPage from './contact.js';

const menuPage = (() => {
    const content = document.querySelector('#content');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    document.body.style.height = '1850px'
    const header = document.createElement('div');
    header.classList.add('header');
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
    const restaurantMenu = document.createElement('div');
    restaurantMenu.classList.add('restaurant-menu');

    // Food 1
    const restaurantFoodContainer1 = document.createElement('div');
    restaurantFoodContainer1.classList.add('restaurant-food-container');
    const createRestaurantFoodImage1 = new Image();
    createRestaurantFoodImage1.src = restaurantFoodImage1;
    createRestaurantFoodImage1.classList = 'restaurant-food-image';
    const restaurantFood1 = document.createElement('div');
    restaurantFood1.classList.add('restaurant-food');
    restaurantFood1.textContent = 'Scallops and Black Pudding';
    const restaurantFoodPrice1 = document.createElement('div');
    restaurantFoodPrice1.classList.add('restaurant-food-price');
    restaurantFoodPrice1.textContent = '$12';
    const restaurantFoodDescription1 = document.createElement('div');
    restaurantFoodDescription1.classList.add('restaurant-food-description');
    restaurantFoodDescription1.textContent = 'N/A';

    // Food 2
    const restaurantFoodContainer2 = document.createElement('div');
    restaurantFoodContainer2.classList.add('restaurant-food-container');
    const createRestaurantFoodImage2 = new Image();
    createRestaurantFoodImage2.src = restaurantFoodImage2;
    createRestaurantFoodImage2.classList = 'restaurant-food-image';
    const restaurantFood2 = document.createElement('div');
    restaurantFood2.classList.add('restaurant-food');
    restaurantFood2.textContent = 'Beef Avo Maki';
    const restaurantFoodPrice2 = document.createElement('div');
    restaurantFoodPrice2.classList.add('restaurant-food-price');
    restaurantFoodPrice2.textContent = '$16';
    const restaurantFoodDescription2 = document.createElement('div');
    restaurantFoodDescription2.classList.add('restaurant-food-description');
    restaurantFoodDescription2.textContent = 'N/A';

    // Food 3
    const restaurantFoodContainer3 = document.createElement('div');
    restaurantFoodContainer3.classList.add('restaurant-food-container');
    const createRestaurantFoodImage3 = new Image();
    createRestaurantFoodImage3.src = restaurantFoodImage3;
    createRestaurantFoodImage3.classList = 'restaurant-food-image';
    const restaurantFood3 = document.createElement('div');
    restaurantFood3.classList.add('restaurant-food');
    restaurantFood3.textContent = 'Sweet and Sour Chicken';
    const restaurantFoodPrice3 = document.createElement('div');
    restaurantFoodPrice3.classList.add('restaurant-food-price');
    restaurantFoodPrice3.textContent = '$14.50';
    const restaurantFoodDescription3 = document.createElement('div');
    restaurantFoodDescription3.classList.add('restaurant-food-description');
    restaurantFoodDescription3.textContent = 'N/A';

    content.appendChild(header);
    header.appendChild(restaurantName);
    header.appendChild(restaurantNavButtons);
    restaurantNavButtons.appendChild(homeButton);
    restaurantNavButtons.appendChild(menuButton);
    restaurantNavButtons.appendChild(contactButton);
    content.appendChild(restaurantMenu);

    // Adding the food containers to the restaurant menu container
    restaurantMenu.appendChild(restaurantFoodContainer1);
    restaurantMenu.appendChild(restaurantFoodContainer2);
    restaurantMenu.appendChild(restaurantFoodContainer3);

    // Container 1
    restaurantFoodContainer1.appendChild(createRestaurantFoodImage1);
    restaurantFoodContainer1.appendChild(restaurantFood1);
    restaurantFoodContainer1.appendChild(restaurantFoodPrice1);
    restaurantFoodContainer1.appendChild(restaurantFoodDescription1);
    
    // Container 2
    restaurantFoodContainer2.appendChild(createRestaurantFoodImage2);
    restaurantFoodContainer2.appendChild(restaurantFood2);
    restaurantFoodContainer2.appendChild(restaurantFoodPrice2);
    restaurantFoodContainer2.appendChild(restaurantFoodDescription2);

    // Container 3
    restaurantFoodContainer3.appendChild(createRestaurantFoodImage3);
    restaurantFoodContainer3.appendChild(restaurantFood3);
    restaurantFoodContainer3.appendChild(restaurantFoodPrice3);
    restaurantFoodContainer3.appendChild(restaurantFoodDescription3);

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

export default menuPage;