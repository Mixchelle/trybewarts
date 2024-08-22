// Define all constants at the beginning
const LOGIN_FORM = document.getElementById('login-form');
const EVALUATION_FORM = document.getElementById('evaluation-form');
const FORM_DATA_SECTION = document.getElementById('form-data');
const LOGO_DATA_SECTION = document.getElementById('trybewarts-forms-logo');
const TEXTAREA = document.getElementById('textarea');
const COUNTER = document.getElementById('counter');
const BACKGROUND_DIV = document.getElementById('background');
const HOUSE_SELECT = document.getElementById('house');
const logo = document.getElementById('trybewarts-header-logo');
// Handle login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  const validEmail = 'tryber@teste.com';
  const validPassword = '123456';

  if (email === validEmail && password === validPassword) {
    alert('Hello, Tryber!');
  } else {
    alert('Invalid email or password.');
  }
}

const HOUSE_IMAGES = {
  Gitnória: 'images/Gitnória-card.png',
  Reactpuff: 'images/Reactpuff-card.avif',
  Corvinode: 'images/Corvinode-card.png',
  Pytherina: 'images/Pytherina-card.avif',
};

// Function to update the house image
function updateHouseImage() {
  const selectedHouse = HOUSE_SELECT.value;
  const houseImage = document.getElementById('house-image');

  // Set the image source based on the selected house
  if (HOUSE_IMAGES[selectedHouse]) {
    houseImage.src = HOUSE_IMAGES[selectedHouse];
  } else {
    houseImage.src = ''; // Clear the image if no house is selected
  }
}

// Update background class based on selected house
function updateBackgroundClass() {
  const selectedHouse = HOUSE_SELECT.value;

  // Remove all house classes
  ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'].forEach((house) => {
    BACKGROUND_DIV.classList.remove(house);
  });

  // Add the selected house class if it exists
  if (selectedHouse) {
    BACKGROUND_DIV.classList.add(selectedHouse);
  }
  updateHouseImage();
}

// Display form data in the formDataSection
function displayFormData({ name, email, house, family, subjects, rating, comments }) {
  document.getElementById('form-name').textContent = `${name}`;
  document.getElementById('form-email').textContent = `Email: ${email}`;
  document.getElementById('form-house').textContent = `${house}`;
  document.getElementById('form-family').textContent = `Family: ${family}`;
  document.getElementById('form-subjects').textContent = `Subjects: ${subjects}`;
  document.getElementById('form-rating').textContent = `Rating: ${rating}`;
  document.getElementById('form-comments').textContent = `Comments: ${comments}`;
}

// Handle evaluation form submission
// eslint-disable-next-line max-lines-per-function
function handleEvaluationFormSubmit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('input-name').value,
    email: document.getElementById('input-email').value,
    house: HOUSE_SELECT.value,
    family: document.querySelector('input[name="family"]:checked')?.value || '',
    subjects: Array.from(document.querySelectorAll('.subject:checked')).map((subject) => subject.value).join(', '),
    rating: document.querySelector('input[name="rate"]:checked')?.value || '',
    comments: TEXTAREA.value,
  };

  displayFormData(formData);

  // Update background class based on selected house
  updateBackgroundClass();

  // Hide the evaluation form and logo section
  FORM_DATA_SECTION.style.display = 'block';
  EVALUATION_FORM.style.display = 'none';
  LOGO_DATA_SECTION.style.display = 'none';
}

// Handle textarea input and character count
function handleTextareaInput() {
  COUNTER.textContent = 500 - TEXTAREA.value.length;
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  LOGIN_FORM.addEventListener('submit', handleLoginFormSubmit);
  EVALUATION_FORM.addEventListener('submit', handleEvaluationFormSubmit);
  TEXTAREA.addEventListener('input', handleTextareaInput);
});

logo.addEventListener('click', () => {
  window.location.reload();
});
