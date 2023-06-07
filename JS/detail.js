/* top_btn */
const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        gsap.to(topBtn, 0.3, {
            opacity: 1
        })
    } else {
        gsap.to(topBtn, 0.3, {
            opacity: 0
        })
    } /* 스크롤 내릴 때 */
})

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0
    })
}) /* 스크롤 위로 올릴때 */

// lnb_scroll
let header = document.querySelector('.header_wrap')
let headerHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
});

//header-wrap border
const lnbItems = document.querySelectorAll('#main_lnb .lnb_item');

lnbItems.forEach((lnbItem) => {
  lnbItem.addEventListener('mouseover', () => {
    let headerWrap = document.getElementById('header_wrap');
    headerWrap.style.border = 'none';
  });

  lnbItem.addEventListener('mouseout', () => {
    let headerWrap = document.getElementById('header_wrap');
    headerWrap.style.border = '';
  });
});

//option_box
  const optionBtn = document.querySelector('.detail_option')
  const optionBox = document.querySelector('.option_box')

  let optionOpen = false;

  optionBtn.addEventListener('click', ()=> {
    if(optionOpen === false) {
      optionBox.style.display = 'block'
      optionOpen = true
    } else {
      optionBox.style.display = 'none'
      optionOpen = false
    }
  })


//search_area

  const searchIcon = document.getElementById('search_icon')
  const searchClose = document.querySelector('.search_close')

  searchIcon.addEventListener('click', function() {
    document.querySelector('.search_area').style.height = 340 + 'px'
  })

  searchClose.addEventListener('click', function(){
    document.querySelector('.search_area').style.height = 0
  })


//detail_box01
  const noteBtn = document.querySelector('.note_btn')
  const noteContent = document.querySelector('.note_box')
  const notePlus = document.querySelector('.plusminus')

  let noteOpen = false

  noteBtn.addEventListener('click', function(){
      if(noteOpen===false) {
          noteContent.style.display = 'block'
          notePlus.classList.add('active')
          noteOpen = true
      } else {
          noteContent.style.display = 'none';
          notePlus.classList.remove('active')
          noteOpen = false
      }
  })

//detail_box02
  const inBtn = document.querySelector('.in_btn')
  const inContent = document.querySelector('.in_box')
  const inPlus = document.querySelector('.in_plus')

  let inOpen = false

  inBtn.addEventListener('click', function(){
      if(inOpen===false) {
        inContent.style.display = 'block';
        inPlus.classList.add('active')
        inOpen = true
      } else {
        inContent.style.display = 'none';
          inPlus.classList.remove('active')
          inOpen = false
      }
  })

//review_area
  const reBtn = document.querySelector('.review_btn')
  const reContent = document.querySelector('.riview_box')
  const reviewPlus = document.querySelector('.review_plus')

  let reOpen = false

  reBtn.addEventListener('click', function(){
      if(reOpen===false) {
        reContent.style.display = 'block';
        reviewPlus.classList.add('active')
        reOpen = true
      } else {
        reContent.style.display = 'none';
        reviewPlus.classList.remove('active')
          reOpen = false
      }
  })

//part02
  const partBtn = document.querySelector('.part02')
  const reviewTxt = document.querySelector('.review_txt')

  let reOpen2 = false

  partBtn.addEventListener('click', function(){
    if(reOpen2 === false) {
      reviewTxt.style.display = 'block';
      reOpen = true
    } else {
      reviewTxt.style.display = 'none';
      reOpen2 = false
    } 
  })

  //parcel
  const paBtn = document.querySelector('.parcel_btn')
  const paContent = document.querySelector('.parcel_box')
  const paPlus = document.querySelector('.parcel_plus')

  let paOpen = false

  paBtn.addEventListener('click', function(){
      if(paOpen===false) {
        paContent.style.display = 'block';
        paPlus.classList.add('active')
        paOpen = true
      } else {
        paContent.style.display = 'none';
        paPlus.classList.remove('active')
          paOpen = false
      }
  })


//Review_content
const photoInput = document.getElementById('photo-input');
const descriptionInput = document.getElementById('description-input');
const uploadButton = document.getElementById('upload-button');
const gallery = document.getElementById('gallery');
let reviewId = 1;

uploadButton.addEventListener('click', uploadPhoto);

function uploadPhoto() {
  const file = photoInput.files[0]; //선택된 파일 가져오기
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result; //이미지 url
      const description = descriptionInput.value; //리뷰 내용
      const today = getToday(); //today
      displayPhoto(imageUrl, description, today);
      resetInputs(); //초기화시키기
    };
    reader.readAsDataURL(file); 
    //file 객체를 사용하여 데이터를 비동기적으로 읽어와서 Data URL 형식으로 반환하는 메서드
  }
}

function displayPhoto(imageUrl, description, today) {
  const photoItem = document.createElement('div');  //리뷰div 생성
  photoItem.classList.add('photo-item');

  const image = document.createElement('img'); 
  image.src = imageUrl; //이미지 url 설정
  photoItem.appendChild(image);

  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = description; // description-input 받는내용
  photoItem.appendChild(descriptionPara);

  const datePara = document.createElement('p');
  datePara.textContent = today;
  photoItem.appendChild(datePara);

  const deleteButton = document.createElement('button'); //삭제하기 버튼
  deleteButton.setAttribute('class', 'delete')
  deleteButton.textContent = '삭제하기';

  deleteButton.addEventListener('click', deletePhoto);
  photoItem.appendChild(deleteButton);
  gallery.appendChild(photoItem);
}

function deletePhoto(event) {
  const photoItem = event.target.closest('.photo-item'); //가장 가까운 요소 가져오기
  if (photoItem) {
    photoItem.remove(); //요소를 삭제
  }
}

function resetInputs() { //초기화
  photoInput.value = ''; 
  descriptionInput.value = '';
}

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
}



//sns_swiper
const listItems = document.querySelectorAll('.swiper-slide');
const modals = document.querySelectorAll('.modal');

listItems.forEach(function(listItem) {
  listItem.addEventListener("click", function() {
    let modalId = listItem.getAttribute("data-modal");
    showSpecificModal(modalId);
  });
});

function showSpecificModal(modalId) {
  modals.forEach(function(modal) {
    if (modal.id === modalId) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
}

const closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function() {
    let modal = closeBtn.closest('.modal');
    modal.style.display = "none";
  });
});

// 배경 클릭 이벤트 처리
const bgs = document.querySelectorAll('.bg');
bgs.forEach(function(bg) {
 bg.addEventListener("click", function() {
   let modal = bg.closest('.modal');
   modal.style.display = "none";
 });
});

//footer list

  const item1Link = document.getElementById("item1-link");
  let item2Link = document.getElementById("item2-link");
  let item3Link = document.getElementById("item3-link");

  let item1Box = document.getElementById("item1");
  let item2Box = document.getElementById("item2");
  let item3Box = document.getElementById("item3");

  item1Link.addEventListener("click", function(event) {
    event.preventDefault();
    toggleItem(item1Box);
  });

  item2Link.addEventListener("click", function(event) {
    event.preventDefault();
    toggleItem(item2Box);
  });

  item3Link.addEventListener("click", function(event) {
    event.preventDefault();
    toggleItem(item3Box);
  });

  function toggleItem(item) {
    let display = item.style.display;
    const listBoxes = document.getElementsByClassName("list_box");
    for (let i = 0; i < listBoxes.length; i++) {
      listBoxes[i].style.display = "none";
    }
    if (display === "block") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  }

  document.body.addEventListener("click", function(event) {
    let clickedElement = event.target;
    let isItemLink = [item1Link, item2Link, item3Link].includes(clickedElement);
    let isItemBox = [item1Box, item2Box, item3Box].includes(clickedElement);

    if (!isItemLink && !isItemBox) {
      let listBoxes = document.getElementsByClassName("list_box");
      for (let i = 0; i < listBoxes.length; i++) {
        listBoxes[i].style.display = "none";
      }
    }
  });


//cart_price
window.onload = function() {
  let sellPrice = 110000; // 판매 가격
  let amountInput = document.getElementsByName("amount")[0];
  let sumOutput = document.getElementsByName("sum")[0];

  amountInput.value = 1;
  sumOutput.value = sellPrice.toLocaleString();

  document.getElementsByName("add")[0].onclick = function() {
    let quantity = parseInt(amountInput.value) + 1;
    amountInput.value = quantity;
    calculateTotal(quantity);
  }

  document.getElementsByName("minus")[0].onclick = function() {
    let quantity = parseInt(amountInput.value) - 1;
    if (quantity >= 1) {
      amountInput.value = quantity;
      calculateTotal(quantity);
    }
  }

  function calculateTotal(quantity) {
    let total = sellPrice * quantity;
    sumOutput.value = total.toLocaleString();
  }
}

//cart

  const cartBtn = document.querySelector('.cart_btn')
  const detailCart = document.querySelector('.detail_cart')
  const cartClose = document.querySelector('.close_btn')

  cartBtn.addEventListener('click', function(){
    detailCart.style.display = 'block'
  })
  cartClose.addEventListener('click', function(){
    detailCart.style.display = 'none'
  })


//swiper option
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
/*   autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, */
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});  

const swiper3 = new Swiper(".box02", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper4 = new Swiper(".snsSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  centeredSlides : true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//**제이쿼리
//sub_menu
$(function(){
  $(".main_lnb li").hover(function() {
    $(this).children(".sub_menu_area").stop().slideToggle(300)
  })
})
