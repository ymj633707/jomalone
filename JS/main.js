//롤링 배너 복제본 생성
let roller = document.querySelector('.rolling_list');
roller.id = 'roller1';

let clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.rolling_area').appendChild(clone); //부착

//원본, 복제본 배너 위치 지정
document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling_list ul').offsetWidth+'px';

//클래스 할당
roller.classList.add('original');
clone.classList.add('clone');


//롤링배너 닫기 버튼
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('alert').style.display ='none';
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


/*promotion*/
  document.querySelector('.promotion_txt01').addEventListener('mouseover', function(){
    let imgSrc = document.querySelector('.promotion_img01 > img').getAttribute('src')

    document.querySelector('.promotion_content > img').setAttribute('src', imgSrc)
  })

  document.querySelector('.promotion_txt02').addEventListener('mouseover', function(){
    let imgSrc = document.querySelector('.promotion_img02 > img').getAttribute('src')

    document.querySelector('.promotion_content > img').setAttribute('src', imgSrc)
  })
  document.querySelector('.promotion_txt03').addEventListener('mouseover', function(){
    let imgSrc = document.querySelector('.promotion_img03 > img').getAttribute('src')

    document.querySelector('.promotion_content > img').setAttribute('src', imgSrc)
  })
  document.querySelector('.promotion_txt04').addEventListener('mouseover', function(){
    let imgSrc = document.querySelector('.promotion_img04 > img').getAttribute('src')

    document.querySelector('.promotion_content > img').setAttribute('src', imgSrc)
  })

  const bgc1 = document.querySelector('.bgc1')
  const bgc2 = document.querySelector('.bgc2')
  const bgc3 = document.querySelector('.bgc3')
  const bgc4 = document.querySelector('.bgc4')

  document.querySelector('.promotion_txt01').addEventListener('mouseover', function(){
    bgc1.classList.remove('on')
    bgc1.classList.add('hidden')

    bgc2.classList.add('on')
    bgc2.classList.remove('hidden')
    bgc3.classList.add('on')
    bgc3.classList.remove('hidden')
    bgc4.classList.add('on')
    bgc4.classList.remove('hidden')
   
  })

  document.querySelector('.promotion_txt02').addEventListener('mouseover', function(){
    bgc2.classList.remove('on')
    bgc2.classList.add('hidden')

    bgc1.classList.add('on')
    bgc1.classList.remove('hidden')
    bgc3.classList.add('on')
    bgc3.classList.remove('hidden')
    bgc4.classList.add('on')
    bgc4.classList.remove('hidden')
   
  })

  document.querySelector('.promotion_txt03').addEventListener('mouseover', function(){
    bgc3.classList.remove('on')
    bgc3.classList.add('hidden')

    bgc1.classList.add('on')
    bgc1.classList.remove('hidden')
    bgc2.classList.add('on')
    bgc2.classList.remove('hidden')
    bgc4.classList.add('on')
    bgc4.classList.remove('hidden')
   
  })

  document.querySelector('.promotion_txt04').addEventListener('mouseover', function(){
    bgc4.classList.remove('on')
    bgc4.classList.add('hidden')

    bgc1.classList.add('on')
    bgc1.classList.remove('hidden')
    bgc2.classList.add('on')
    bgc2.classList.remove('hidden')
    bgc3.classList.add('on')
    bgc3.classList.remove('hidden')
   
  })


})

/*tab_menu*/
const tabItem = document.querySelectorAll('.tab_item')
const tabInner = document.querySelectorAll('.tab_inner')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')
    })
})

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

/* window.scroll_event */


//
let bestItems = document.querySelectorAll('.best_hover')

let bestModals = document.querySelectorAll('.best_modal')

bestItems.forEach(function(bestItem){
  bestItem.addEventListener('click', function(){
    let bestId = bestItem.getAttribute('data-modal')
    showBestModal(bestId)
  });
});

function showBestModal(bestId) {
  bestModals.forEach(function(bestModal){
    if(bestModal.id === bestId) {
      bestModal.style.display = 'block'
    } else {
      bestModal.style.display = 'none'
    }
  });
}

let bestCloses = document.querySelectorAll('.best_close');
bestCloses.forEach(function(bestClose) {
  bestClose.addEventListener('click', function(){
    let modal = bestClose.closest('.best_modal');
    modal.style.display = 'none';
  });
});

let bestBgs = document.querySelectorAll('.bg')
bestBgs.forEach(function(bestBg) {
  bestBg.addEventListener('click', function(){
    let modal = bestBg.closest('.best_modal');
    modal.style.display = 'none';
  });
});













 // 리스트 항목 요소들
 let listItems = document.querySelectorAll('.swiper-slide');

 // 모달창 요소들
 let modals = document.querySelectorAll('.modal');
 
 // 리스트 항목 클릭 이벤트 처리
 listItems.forEach(function(listItem) {
 listItem.addEventListener("click", function() {
 let modalId = listItem.getAttribute("data-modal");
 showSpecificModal(modalId);
 });
 });
 
 // 특정 모달창만 표시하는 함수
 function showSpecificModal(modalId) {
 modals.forEach(function(modal) {
 if (modal.id === modalId) {
   modal.style.display = "block";
 } else {
   modal.style.display = "none";
 }
 });
 }

 // 닫기 버튼 클릭 이벤트 처리
 let closeBtns = document.querySelectorAll('.closeBtn');
 closeBtns.forEach(function(closeBtn) {
   closeBtn.addEventListener("click", function() {
     let modal = closeBtn.closest('.modal');
     modal.style.display = "none";
   });
 });

// 배경 클릭 이벤트 처리
let bgs = document.querySelectorAll('.bg');
bgs.forEach(function(bg) {
  bg.addEventListener("click", function() {
    let modal = bg.closest('.modal');
    modal.style.display = "none";
  });
});


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

  // Body 클릭 시 닫히도록 이벤트 처리
  document.body.addEventListener("click", function(event) {
    // 클릭된 요소가 item1, item2, item3의 링크나 박스인지 확인
    let clickedElement = event.target;
    let isItemLink = [item1Link, item2Link, item3Link].includes(clickedElement);
    let isItemBox = [item1Box, item2Box, item3Box].includes(clickedElement);

    // 클릭된 요소가 item1, item2, item3의 링크나 박스가 아니면 모든 박스를 닫음
    if (!isItemLink && !isItemBox) {
      let listBoxes = document.getElementsByClassName("list_box");
      for (let i = 0; i < listBoxes.length; i++) {
        listBoxes[i].style.display = "none";
      }
    }
  });
});




/* let bodyElements = document.body;
bodyElements.forEach(function(bodyElement) {
  bodyElement.addEventListener('click', function(){
bodyElements.forEach(function(bodyElement) {
  let listBox = bodyElement.closest('.list_box');
  listBox.style.display = 'none';
  })
}) */







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



//**제이쿼리

//main_visual
$(document).ready(function() {
    $('[data-vbg]').youtube_background(); // 실행
  });


//sub_menu
  $(".main_lnb li").hover(function() {
    $(this).children(".sub_menu_area").stop().slideToggle(300)
  })


  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
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
  

  const swiper3 = new Swiper(".snsSwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $(".swiper").each(function(elem, target){
    const swp = target.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});


var currentQuestion = 0;
var selectedOptions = {
  question1: null,
  question2: null
};

function selectOption(question, option) {
  selectedOptions[question] = option;
  
  var otherOption = (option === 'option1') ? 'option2' : 'option1';
  selectedOptions[question] = option;
  
  // 다른 옵션 체크 해제
  var otherOptionElement = document.querySelector('input[name="' + question + '"][value="' + otherOption + '"]');
  otherOptionElement.checked = false;
}

function startTest() {
  // 시작 페이지 숨기고 첫 번째 질문 보이기
  var startPage = document.getElementById("start");
  startPage.style.display = "none";
  
  showQuestion();
}

function showQuestion() {
  var questions = document.getElementsByClassName("question");
  
  // 현재 질문 숨기기
  if (currentQuestion > 0) {
    questions[currentQuestion - 1].style.display = "none";
  }
  
  // 다음 질문으로 이동
  currentQuestion++;
  
  // 모든 질문에 답변을 완료한 경우 결과 보여주기
  if (currentQuestion > questions.length) {
    showResult();
    return;
  }
  
  // 다음 질문 보이기
  questions[currentQuestion - 1].style.display = "block";
}

function showResult() {
  var resultDiv1 = document.getElementById("result1");
  var resultDiv2 = document.getElementById("result2");

  // 선택된 옵션 개수 계산
  var option1Count = 0;
  var option2Count = 0;

  for (var question in selectedOptions) {
    if (selectedOptions[question] === 'option1') {
      option1Count++;
    } else if (selectedOptions[question] === 'option2') {
      option2Count++;
    }
  }

  // 결과 페이지 보여주기
  if (option1Count >= option2Count) {
    resultDiv1.style.display = "block";
    resultDiv2.style.display = "none";
  } else if (option1Count < option2Count) {
    resultDiv1.style.display = "none";
    resultDiv2.style.display = "block";
  } 
}