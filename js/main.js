const elForm = document.querySelector('#form');
const elName = document.querySelector('input[id="name"]');
const elFname = document.querySelector('input[id="fname"]');
const elNumber = document.querySelector('input[id="number"]');
const elCategory = document.getElementById('contact-cat');
const elList = document.querySelector('#id-list');


// SORTLASH QISMI
const elAll = document.getElementById('all');
const elFam = document.getElementById('fam');
const elFri = document.getElementById('fri');
const elCol = document.getElementById('col');


//Yangi array

const newArr = [
  {
    name: 'Toshmat',
    fname: 'Eshmatov',
    number: 998901234567,
    cate: 'Friends'
  }
]

window.addEventListener('load', () => {
  let li = document.createElement('li');
  for(let i = 0; i < newArr.length; i++) {
    li.className = `contact__item contact__${newArr[i].cate}`;

    li.innerHTML = `
    <p class="contact__text">
    <span class="contact__cate">Full name</span>
    ${newArr[i].name} ${newArr[i].fname}
  </p>
  <p class="contact__text">
    <span class="contact__cate">Number</span>
    +${newArr[i].number}
  </p>

  <p class="contact__text">
    <span class="contact__cate">Category</span>
    ${newArr[i].cate}
  </p>

  <p class="contact__text"><a class="contact__tel" href="tel:+${newArr[i].number}">Call <i class='bx bxs-phone-call'></i></a></p>
    `
  }
  elList.appendChild(li);
})


elForm.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  newArr.push({
    name: elName.value,
    fname: elFname.value,
    number: elNumber.value,
    cate: elCategory.value
  });

  let li = document.createElement('li');
  for(let i = 1; i < newArr.length; i++) {
    li.className = `contact__item contact__${newArr[i].cate}`;

    li.innerHTML = `
    <p class="contact__text">
    <span class="contact__cate">Full name</span>
    ${newArr[i].name} ${newArr[i].fname}
  </p>
  <p class="contact__text">
    <span class="contact__cate">Number</span>
    +${newArr[i].number}
  </p>

  <p class="contact__text">
    <span class="contact__cate">Category</span>
    ${newArr[i].cate}
  </p>

  <p class="contact__text"><a class="contact__tel" href="tel:+${newArr[i].number}">Call <i class='bx bxs-phone-call'></i></a></p>
    `
  }
  // inputlarni tozalash

  elName.value = '';
  elFname.value = '';
  elNumber.value = '998';


  // display chiqaramiz

  elList.appendChild(li);

}

console.log(newArr)


// Filter qilish qismi

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  for(let i = 0; i < sortLi.length; i++) {
    if(sortLi[i].classList.contains("contact__family") || sortLi[i].classList.contains("contact__friends") || sortLi[i].classList.contains("contact__colleague")) {
      sortLi[i].style.display = 'block';
    }
  }
});

elFam.addEventListener('click', ()=> {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("contact__family")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block'
      }
    }
  });

  elFri.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("contact__friends")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });

  elCol.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("contact__colleague")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });