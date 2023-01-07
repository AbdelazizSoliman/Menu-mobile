// Hamburger menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-link');
const blurs = document.getElementById('blur');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  blurs.classList.toggle('blur');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const workList = [{
  id: '1',
  name: 'Tonic',
  feature: ['CANOPY', 'Back End Dev', 2015],
  short_desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  modal_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://abdelazizsoliman.github.io/Menu-mobile/',
  src_link: 'https://github.com/AbdelazizSoliman/Menu-mobile',
  card_img: 'img/Snapshoot Portfolio.svg',
  modal_img: 'img/Snapshoot Portfolio.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  modal_tags: ['html', 'css', 'javascript', 'github', 'Bootstrap'],
  card_tags: ['html', 'css', 'javascript'],
},
{
  id: '2',
  name: 'Multi-Post Stories',
  feature: ['FACEBOOK', 'Full Stack Dev', 2015],
  short_desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  modal_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://abdelazizsoliman.github.io/Menu-mobile/',
  src_link: 'https://github.com/AbdelazizSoliman/Menu-mobile',
  card_img: 'img/Snapshoot-Portfolio1.svg',
  modal_img: 'img/Snapshoot-Portfolio1.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  modal_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
  classNm: 'card-reverse',
},
{
  id: '3',
  name: 'Multi-Post Stories',
  feature: ['FACEBOOK', 'Full Stack Dev', 2015],
  short_desc: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  modal_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://abdelazizsoliman.github.io/Menu-mobile/',
  src_link: 'https://github.com/AbdelazizSoliman/Menu-mobile',
  card_img: 'img/Snapshoot-Portfolio2.svg',
  modal_img: 'img/Snapshoot-Portfolio2.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  modal_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
},
{
  id: '4',
  name: 'Uber Navigation',
  feature: ['CANOPY', 'Back End Dev', 2015],
  short_desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  modal_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://abdelazizsoliman.github.io/Menu-mobile/',
  src_link: 'https://github.com/AbdelazizSoliman/Menu-mobile',
  card_img: 'img/Snapshoot-Portfolio3.svg',
  modal_img: 'img/Snapshoot-Portfolio3.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  modal_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
  classNm: 'card-reverse',
},
];

const cardElementement = document.querySelector('.cards');
workList.forEach((project, id) => {
  cardElementement.innerHTML += `<section class="card ${project.classNm}">  
  <img src="${project.card_img}" class="img-${project.card_img[0]}" alt="Snapshoot-Portfolio">
      <div class="card-block" id="article-${id + 1}">
          <h2>${project.name}</h2>
          <ul class="card-frame">
              <li class="no-count">${project.feature[0]}</li>
              <li>${project.feature[1]}</li>
              <li>${project.feature[2]}</li>
          </ul>
          <p>${project.short_desc}</p>
          <ul class="card-tags">
              <li>${project.card_tags[0]}</li>
              <li>${project.card_tags[1]}</li>
              <li>${project.card_tags[2]}</li>
          </ul>
          <button class="card-button" type="submit" >See Project</button>
</div></section>`;
});
const popUpHandler = ((obj) => {
  const template = `
    <div class="overlay-content">
      <div class="feature">
        <div class="model-top">
          <h3>${obj.name}</h3>
          <button class="close-overlay">&times</button>
        </div>
        <ul class="card-frame featureList">
          <li class="no-count">${obj.feature[0]}</li>
          <li>${obj.feature[1]}</li>
          <li>${obj.feature[2]}</li>
        </ul>
        <img class="modal_img" src="${obj.modal_img}" alt="" />
         <div class="popBottomContent">
            <p>${obj.modal_desc}</p>
            <ul class="card-tags model-tags">
              <li>${obj.modal_tags[0]}</li>
              <li>${obj.modal_tags[1]}</li>
              <li>${obj.modal_tags[2]}</li>
              <li>${obj.modal_tags[3]}</li>
              <li>${obj.modal_tags[4]}</li>
              <li>${obj.modal_tags[5]}</li>
              <div class="popButtoms">
                <a href="${obj.live_link}" type="submit">See live <img src="${obj.live_img}" alt="" /></a>
                <a href="${obj.src_link}" type="sumbit" class="secondchild">See Source <img src="${obj.src_Img}" alt="" /></a>
              </div>
            </ul>
        </div>
      </div>
    </div>`;
  return template;
});
const overlay = document.querySelector('.overlay');
const cardButton = document.querySelectorAll('.card-button');

cardButton.forEach((each) => each.addEventListener('click', function OpenPopUp() {
  overlay.classList.remove('disable');
  const ids = this.parentNode.id.split('-')[1];

  const fetchObj = workList.filter((each) => each.id === ids);
  const dynamicTemplate = popUpHandler(fetchObj[0]);
  overlay.innerHTML = '';
  overlay.innerHTML += dynamicTemplate;

  const closeOverlay = document.querySelector('.close-overlay');
  closeOverlay.addEventListener('click', () => {
    overlay.classList.add('disable');
  });
}));

cardButton.forEach((each) => each.addEventListener('click', function OpenPopUp() {
  overlay.classList.remove('disable');
  const ids = this.parentNode.id.split('-')[1];
  const fetchObj = workList.filter((each) => each.id === ids);
  const dynamicTemplate = popUpHandler(fetchObj[0]);
  overlay.innerHTML = '';
  overlay.innerHTML += dynamicTemplate;

  const closeOverlay = document.querySelector('.close-overlay');
  closeOverlay.addEventListener('click', () => {
    overlay.classList.add('disable');
  });
}));

// Form Validation
const form = document.querySelector('.form-input');
const email = document.getElementById('email');

// Error Mesaage for Invalid email
const setError = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};

// Success Mesaage for Valid email
const setSuccess = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};

const validateInputs = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError('Email is required');
  } else if (emailValue.toLowerCase() !== emailValue) {
    setError('email should be in lowercase. Please resubmit again');
  } else {
    setSuccess('Data sent Successfully');
  }
};

form.addEventListener('submit', (e) => {
  validateInputs(e);
});
