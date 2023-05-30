document.addEventListener('DOMContentLoaded', () => {
    
    //변수선언
    const userId = document.getElementById('user_id')
    const userPw1 = document.getElementById('user_pw1')
    const userPw2 = document.getElementById('user_pw2')
    const telSecond = document.getElementById('tel_second')
    const telThird = document.getElementById('tel_third')
    const userName = document.getElementById('user_name')

    const totalTerms = document.getElementById('total_terms')
    const terms01 = document.getElementById('terms_01')
    const terms02 = document.getElementById('terms_02')
    const terms03 = document.getElementById('terms_03')

    const viewBlock1 = document.getElementById('view1')
    const content1 = document.querySelector('.content01')
    const viewBlock2 = document.getElementById('view2')
    const content2 = document.querySelector('.content02')
    const viewBlock3 = document.getElementById('view3')
    const content3 = document.querySelector('.content03')

    const check = document.getElementById('join_btn')

    //유효성 검사 메세지 변수선언
    let elFailuremessage = document.querySelector('.id_notice_failure')
    let elFailuremessage1 = document.querySelector('.id_notice_failure1')
    let elSuccessmessage = document.querySelector('.id_notice_success')

    let pwFailuremessage = document.querySelector('.pw_notice_failure')
    let pwFailuremessage1 = document.querySelector('.pw_notice_failure1')
    
    let chkPwSuccess = document.querySelector('.repw_notice_success')
    let chkPwFailure = document.querySelector('.repw_notice_failure')
    let chkPwFailure1 = document.querySelector('.repw_notice_failure1')

    let chkNameFailure = document.querySelector('.name_notice_failure')

    let chkNumFailure = document.querySelector('.user_number_failure')

    //약관보기
    let state1 = false;
    let state2 = false;
    let state3 = false;

    //이벤트
    userId.addEventListener('focusout' , checkId)
    userPw1.addEventListener('focusout', checkPw)
    userPw2.addEventListener('focusout', reCheck)
    userName.addEventListener('focusout', checkName)
    telSecond.addEventListener('focusout', checkNum1)
    telThird.addEventListener('focusout', checkNum2)
    telSecond.addEventListener('keyup', moveTel)

    totalTerms.addEventListener('click', totalCheck)
    terms01.addEventListener('click', termsCheck)
    terms02.addEventListener('click', termsCheck)
    terms03.addEventListener('click', termsCheck)

    check.addEventListener('click', joinCheck)


    function checkId() {
        if(userId.value ==="") {
            elFailuremessage1.classList.remove('hide')
            elFailuremessage.classList.add('hide')
            elSuccessmessage.classList.add('hide')
            return false;
        } else if(userId.value.length < 4) {
            elFailuremessage.classList.remove('hide')
            elFailuremessage1.classList.add('hide')
            elSuccessmessage.classList.add('hide')
            return false;
        } else {
            elSuccessmessage.classList.remove('hide')
            elFailuremessage.classList.add('hide')
            elFailuremessage1.classList.add('hide')
            return true;
        }
    } //ID 유효성 검사

    function checkPw() {
        if(userPw1.value ==="") {
            pwFailuremessage1.classList.remove('hide') 
            pwFailuremessage.classList.add('hide')
            return false;
        } else if(userPw1.value.length < 6) {
            pwFailuremessage.classList.remove('hide')
            pwFailuremessage1.classList.add('hide')
            return false;
        } else {
            pwFailuremessage.classList.add('hide')
            pwFailuremessage1.classList.add('hide')
            return true;
        }
    } // 비밀번호 유효성 검사


    function reCheck() {
        if(userPw2.value ==="") {
            chkPwFailure1.classList.remove('hide')
            chkPwSuccess.classList.add('hide')
            chkPwFailure.classList.add('hide')
            return false;
        } else if(userPw1.value !== userPw2.value) {
            chkPwSuccess.classList.add('hide')
            chkPwFailure.classList.remove('hide')
            chkPwFailure1.classList.add('hide')
            return false;
        } else if(userPw1.value === userPw2.value){
            chkPwFailure.classList.add('hide')
            chkPwSuccess.classList.remove('hide')
            chkPwFailure1.classList.add('hide')
            return true; 
        }
    } //비밀번호 재확인

    function checkName() {
        if(userName.value ==="") {
            chkNameFailure.classList.remove('hide')
            return false;
        } else {
            chkNameFailure.classList.add('hide')
            return true;
        }
    } // 이름 확인

    function moveTel()  {
        if(telSecond.value.length >= 4) {
            telThird.focus()
        }
    } // 휴대전화 번호 4개 입력시 자동 focus 이동

    function checkNum1() {
        if(telSecond.value===""){
            chkNumFailure.classList.remove('hide')
            return false;
        }  else {
            chkNumFailure.classList.add('hide')
            return true;
        }
    } //휴대전화 번호 확인1
    function checkNum2() {
        if(telThird.value===""){
            chkNumFailure.classList.remove('hide')
            return false;
        }  else {
            chkNumFailure.classList.add('hide')
            return true;
        }
    }  //휴대전화 번호 확인2


    function totalCheck() {
        if(totalTerms.checked === true) {
            terms01.checked = true
            terms02.checked = true
            terms03.checked = true
        } else {
            terms01.checked = false
            terms02.checked = false
            terms03.checked = false
        }
    } //약관 모두 체크

    function termsCheck() {
        if(terms01.checked === true && terms02.checked === true && terms03.checked === true) {
            totalTerms.checked = true
        } else {
            totalTerms.checked = false
        }
    } // 

    

    viewBlock1.addEventListener('click', ()=> {
        if(!state1) {
            content1.style.display = 'block'
            state1=true
        } else if(state1) {
            content1.style.display = 'none'
            state1 = false
        }
    })
    viewBlock2.addEventListener('click', ()=> {
        if(!state2) {
            content2.style.display = 'block'
            state2=true
        } else if(state2) {
            content2.style.display = 'none'
            state2 = false
        }
    })
    viewBlock3.addEventListener('click', ()=> {
        if(!state3) {
            content3.style.display = 'block'
            state3=true
        } else if(state3) {
            content3.style.display = 'none'
            state3 = false
        }
    })



   
    function joinCheck() {
        if(!(checkId())) {
            userId.focus();
            return false;
        }
        if (!(checkPw())) {
            userPw1.focus();
            return false;
        }
        if (!(reCheck())) {
            pw2.focus();
            return false;
        }
        if (!(checkName())) {
            userName.focus();
            return false;
        }
        if(!(checkNum1())) {
            telSecond.focus();
            return false;
        }
        if(!(checkNum2())) {
            telThird.focus();
            return false;
        }
        if (terms01.checked===false && terms02.checked===false) {
            
            alert('필수약관에 동의하시길 바랍니다')
            return false;
        }
        alert('회원가입 완료되셨습니다. 로그인 페이지로 이동합니다.');
        location.href = "../Login/login_page.html"
        return true;
       
    } //필수입력항목 체크

})

