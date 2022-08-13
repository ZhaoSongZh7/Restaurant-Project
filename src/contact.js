import './style.css';
import contactInfoProfilePicture from './restaurant-contact-info-profile-picture.jpg';
import homePage from './home.js';
import menuPage from './menu.js';

const contactPage = (() => {
    const content = document.querySelector('#content');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    document.body.style.height = '800px'
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

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    const contactInfoTitle = document.createElement('div');
    contactInfoTitle.classList.add('contact-info-title');
    contactInfoTitle.textContent = 'Contact Us!';

    const contactInfoProfile = document.createElement('div');
    contactInfoProfile.classList.add('contact-info-profile');

    const contactInfoPicture = new Image();
    contactInfoPicture.src = contactInfoProfilePicture;
    contactInfoPicture.classList.add('contact-info-picture');

    const contactInfoName = document.createElement('div');
    contactInfoName.classList.add('contact-info-name');
    contactInfoName.textContent = 'Zhao Song Zhou';

    const contactInfoEmail = document.createElement('div');
    contactInfoEmail.classList.add('contact-info-email');
    contactInfoEmail.textContent = 'packers6162@gmail.com';

    const contactInfoPhoneNumber = document.createElement('div');
    contactInfoPhoneNumber.classList.add('contact-info-phone-number');
    contactInfoPhoneNumber.textContent = '123-456-7891';

    content.appendChild(header);
    header.appendChild(restaurantName);
    header.appendChild(restaurantNavButtons);
    restaurantNavButtons.appendChild(homeButton);
    restaurantNavButtons.appendChild(menuButton);
    restaurantNavButtons.appendChild(contactButton);

    content.appendChild(contactInfoContainer);
    contactInfoContainer.appendChild(contactInfoTitle);
    contactInfoContainer.appendChild(contactInfoProfile);
    contactInfoProfile.appendChild(contactInfoPicture);
    contactInfoProfile.appendChild(contactInfoName);
    contactInfoProfile.appendChild(contactInfoEmail);
    contactInfoProfile.appendChild(contactInfoPhoneNumber);

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

export default contactPage;