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

elForm.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  // ismni olamiz

  let name = elName.value;
  let nameItem = document.createElement('p');
  nameItem.className = "contact__text";

  // familya olamiz

  let fname = elFname.value;
  nameItem.innerHTML = `
  <span class="contact__cate">Full name</span>
  ${name} ${fname}
  `;


  // Number olamiz

  let number = elNumber.value;
  let iNumber = document.createElement('p');
  iNumber.className = "contact__text";
  iNumber.innerHTML = `<span class="contact__cate">Number</span>
  ${number}`;
  // iNumber.textContent = number;

  // Categoty

  let cate = document.createElement('p');
  cate.className = "contact__text";
  cate.innerHTML = `<span class="contact__cate">Category</span>
  ${elCategory.value}`;
  // cate.textContent = elCategory.value;

  // Telfon qilish

  let cNumber = document.createElement('p');
  cNumber.className = "contact__text";
  cNumber.innerHTML = `<a class="contact__tel" href="tel:${number}">Call <i class='bx bxs-phone-call'></i></a>`;


  // li itemga qo'shamiz

  let liItem = document.createElement('li');
  liItem.className = `contact__item contact__${elCategory.value}`;


  liItem.appendChild(nameItem);
  liItem.appendChild(iNumber);
  liItem.appendChild(cate);
  liItem.appendChild(cNumber);


  // inputlarni tozalash

  elName.value = '';
  elFname.value = '';
  elNumber.value = '';

  // display chiqaramiz

  elList.appendChild(liItem);

}


// Filter qilish qismi

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  let a = [...sortLi].filter(el => {
    if(el.classList.contains("contact__family") || el.classList.contains("contact__friends") || el.classList.contains("contact__colleague")) {
      el.style.display = 'block'
      return el
    }
  })

  console.log(a)
  // for(let i = 0; i < sortLi.length; i++) {
  //   if(sortLi[i].classList.contains("contact__family") || sortLi[i].classList.contains("contact__friends") || sortLi[i].classList.contains("contact__colleague")) {
  //     sortLi[i].style.display = 'block';
  //   }
  // }
});

elFam.addEventListener('click', ()=> {
    let sortLi = document.querySelectorAll('li');

    let a = [...sortLi].filter(el => {
      if(! el.classList.contains("contact__family")) {
        el.style.display = 'none'
        return el
      }
      else {
        el.style.display = 'block'
        return el
      }
    })

    // for(let i = 0; i < sortLi.length; i++) {
    //   if(! sortLi[i].classList.contains("contact__family")) {
    //     sortLi[i].style.display = 'none';
    //   } else {
    //     sortLi[i].style.display = 'block'
    //   }
    // }
  });

  elFri.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    let a = [...sortLi].filter(el => {
      if(! el.classList.contains("contact__friends")) {
        el.style.display = 'none'
        return el
      }
      else {
        el.style.display = 'block'
        return el
      }
    })

    // for(let i = 0; i < sortLi.length; i++) {
    //   if(! sortLi[i].classList.contains("contact__friends")) {
    //     sortLi[i].style.display = 'none';
    //   } else {
    //     sortLi[i].style.display = 'block';
    //   }
    // }

  });

  elCol.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    let a = [...sortLi].filter(el => {
      if(! el.classList.contains("contact__colleague")) {
        el.style.display = 'none'
        return el
      }
      else {
        el.style.display = 'block'
        return el
      }
    });

    // for(let i = 0; i < sortLi.length; i++) {
    //   if(! sortLi[i].classList.contains("contact__colleague")) {
    //     sortLi[i].style.display = 'none';
    //   } else {
    //     sortLi[i].style.display = 'block';
    //   }
    // }

  });