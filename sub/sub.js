import shoppingList from "./data.js"

const cologneProduct = document.querySelector('.cologne_product')


for (let i=0; i<shoppingList.length; i++) { //shoppingList 길이만큼 for를 돌림 -> 데이터를 추가해도 그만큼 늘어남

    const cologneDiv = document.createElement('div')
    cologneDiv.setAttribute('class', 'cologne_box')

    const imgBox = document.createElement('div')
    imgBox.setAttribute('class', 'img_box')
    cologneDiv.appendChild(imgBox)

    const cologneHref = document.createElement('a')
    cologneHref.setAttribute('href', shoppingList[i].href)
    imgBox.appendChild(cologneHref)

    const cologneImg = document.createElement('img')
    cologneImg.setAttribute('src', shoppingList[i].src) //경로는 [i] -> 각 맞는 번호에 src가 들어가야함
    cologneHref.appendChild(cologneImg)

    const cologneHover = document.createElement('div')
    cologneHover.setAttribute('class', 'cologne_hover')
    cologneHover.setAttribute('data-modal', shoppingList[i].modalID)
    cologneDiv.appendChild(cologneHover)


    const hoverName = document.createElement('p')
    const hoverNameText = document.createTextNode(shoppingList[i].hover)
    hoverName.appendChild(hoverNameText)
    cologneHover.appendChild(hoverName)

    const cologneName1 = document.createElement('p')
    const cologneNameText1 = document.createTextNode(shoppingList[i].name1)
    cologneName1.appendChild(cologneNameText1)
    cologneDiv.appendChild(cologneName1)

    const cologneName2 = document.createElement('p')
    const cologneNameText2 = document.createTextNode(shoppingList[i].name2)
    cologneName2.appendChild(cologneNameText2)
    cologneName2.setAttribute('class', 'name')
    cologneDiv.appendChild(cologneName2)

    const colognePrice = document.createElement('p');
    const priceValue = Number(shoppingList[i].price); // 문자열을 숫자로 변환
    const formattedPrice = priceValue.toLocaleString('en-US'); // 로케일 설정으로 'en-US'를 사용하여 세 자리마다 콤마가 찍힌 문자열로 변환
    
    const colognePriceText = document.createTextNode(`₩${formattedPrice}`);
    colognePrice.appendChild(colognePriceText);
    cologneDiv.appendChild(colognePrice);
    

    cologneProduct.appendChild(cologneDiv)

   

}//shoppingList_for


//sub_menu
$(".main_lnb li").hover(function() {
    $(this).children(".sub_menu_area").stop().slideToggle(300)
  })

  document.addEventListener('DOMContentLoaded', () => { 
    const searchIcon = document.getElementById('search_icon')
    const searchClose = document.querySelector('.search_close')
  
    searchIcon.addEventListener('click', function() {
      document.querySelector('.search_area').style.height = 340 + 'px'
    })
  
    searchClose.addEventListener('click', function(){
      document.querySelector('.search_area').style.height = 0
    })

})

//footer list
document.addEventListener("DOMContentLoaded", function() {
  let item1Link = document.getElementById("item1-link");
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
    let listBoxes = document.getElementsByClassName("list_box");
    for (let i = 0; i < listBoxes.length; i++) {
      listBoxes[i].style.display = "none";
    }
    item.style.display = (display === "block" ? "none" : "block");
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
});

//header-wrap border
const lnbItems = document.querySelectorAll('#main_lnb .lnb_item');

lnbItems.forEach((lnbItem) => {
  lnbItem.addEventListener('mouseover', () => {
    const headerWrap = document.getElementById('header_wrap');
    headerWrap.style.border = 'none';
  });

  lnbItem.addEventListener('mouseout', () => {
    const headerWrap = document.getElementById('header_wrap');
    headerWrap.style.border = '';
  });
});

//lnb-scroll event
let header = document.querySelector('.header_wrap')
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};

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




//cologne_modal
let items = document.querySelectorAll('.cologne_hover')

let modals = document.querySelectorAll('.cologne_modal')

items.forEach(function(item){
  item.addEventListener('click', function(){
    let cologneId = item.getAttribute('data-modal')
    showModal(cologneId)
  });
});

function showModal(cologneId) {
  modals.forEach(function(modal){
    if(modal.id === cologneId) {
      modal.style.display = 'block'
    } else {
      modal.style.display = 'none'
    }
  });
}
let closes = document.querySelectorAll('.cologne_close');
closes.forEach(function(close) {
  close.addEventListener('click', function(){
    let modal = close.closest('.cologne_modal');
    modal.style.display = 'none';
  });
});

let bgs = document.querySelectorAll('.bg')
bgs.forEach(function(bg) {
  bg.addEventListener('click', function(){
    let modal = bg.closest('.cologne_modal');
    modal.style.display = 'none';
  });
});

//search_area
document.addEventListener('DOMContentLoaded', () => { 
  const searchIcon = document.getElementById('search_icon')
  const searchClose = document.querySelector('.search_close')

  searchIcon.addEventListener('click', function() {
    document.querySelector('.search_area').style.height = 340 + 'px'
  })

  searchClose.addEventListener('click', function(){
    document.querySelector('.search_area').style.height = 0
  })
})

//sort
document.addEventListener('DOMContentLoaded', () => {
  const  sortBtn = document.querySelector('.sort_area')
  const  sortBox = document.querySelector('.sort_box')

  let state = false

  sortBtn.addEventListener('click', function(){
    if(!state) {
      sortBox.style.display = 'block'
      state=true
    } else if(state) {
      sortBox.style.display = 'none'
      state = false
    }
  })  
})

const sortByName = document.getElementById('sortByName');
const sortByPrice = document.getElementById('sortByPrice');
const resetSort = document.getElementById('resetSort');
const originalOrder = Array.from(document.querySelectorAll('.cologne_box'));

sortByName.addEventListener('click', function() {
  const cologneProduct = document.querySelector('.cologne_product');
  const cologneBoxes = cologneProduct.querySelectorAll('.cologne_box');
  const sortedArray = Array.from(cologneBoxes).sort((a, b) => {
    const nameA = a.querySelector('.name').textContent;
    const nameB = b.querySelector('.name').textContent;
    return nameA.localeCompare(nameB);
  });
  sortedArray.forEach(function(cologneBox) {
    cologneProduct.appendChild(cologneBox);
  });
});

sortByPrice.addEventListener('click', function() {
  const cologneProduct = document.querySelector('.cologne_product');
  const cologneBoxes = cologneProduct.querySelectorAll('.cologne_box');
  const sortedArray = Array.from(cologneBoxes).sort((a, b) => {
    const priceA = parseInt(a.querySelector('p:nth-of-type(3)').textContent.slice(1).replace(',', ''));
    const priceB = parseInt(b.querySelector('p:nth-of-type(3)').textContent.slice(1).replace(',', ''));
    return priceA - priceB;
  });
  sortedArray.forEach(function(cologneBox) {
    cologneProduct.appendChild(cologneBox);
  });
});

resetSort.addEventListener('click', function() {
  const cologneProduct = document.querySelector('.cologne_product');
  originalOrder.forEach(function(cologneBox) {
    cologneProduct.appendChild(cologneBox);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var header = new XMLHttpRequest();
  header.open("GET", "header.html", true);
  header.onreadystatechange = function() {
    if (header.readyState === 4 && header.status === 200) {
      document.getElementById("header").innerHTML = header.responseText;
    }
  };
  header.send();
})
