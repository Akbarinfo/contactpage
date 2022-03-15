const elForm = document.querySelector('#form');
const elName = document.querySelector('input[id="name"]');
const elFname = document.querySelector('input[id="fname"]');
const elNumber = document.querySelector('input[id="number"]');
const elCategory = document.getElementById('contact-cat');
const elList = document.querySelector('#id-list');


elForm.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  // ismni olamiz

  let name = elName.value;
  let nameItem = document.createElement('p');
  nameItem.className = "contact__text";
  nameItem.textContent = name;

  console.log(`Familya ${name}`);

  // familya olamiz

  let fname = elFname.value;
  let fNameItem = document.createElement('p');
  fNameItem.className = "contact__text";
  fNameItem.textContent = fname;

  // Number olamiz

  let number = elNumber.value;
  let iNumber = document.createElement('p');
  iNumber.className = "contact__text";
  iNumber.textContent = number;

  // Telfon qilish

  let cNumber = document.createElement('p');
  cNumber.className = "contact__text";
  cNumber.innerHTML = `<a class="contact__tel" href="tel:${number}">Call</a>`;


  // li itemga qo'shamiz

  let liItem = document.createElement('li');
  liItem.className = `contact__item ${elCategory.value}`;


  liItem.appendChild(nameItem);
  liItem.appendChild(fNameItem);
  liItem.appendChild(iNumber);
  liItem.appendChild(cNumber);

  // display chiqaramiz

  elList.appendChild(liItem);
}


// Filter qilish qismi

// SORTLASH QISMI

const elAll = document.getElementById('all');
const elFam = document.getElementById('fam');
const elFri = document.getElementById('fri');
const elCol = document.getElementById('col');

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  for(let i = 0; i < sortLi.length; i++) {
    if(sortLi[i].classList.contains("family") || sortLi[i].classList.contains("friends") || sortLi[i].classList.contains("colleague")) {
      sortLi[i].style.display = 'block';
    }
  }
});

elFam.addEventListener('click', ()=> {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("family")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block'
      }
    }
  });

  elFri.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("friends")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });

  elCol.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("colleague")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });