document.addEventListener('DOMContentLoaded', () => {
    
    const searchBtn = document.querySelector('.search_btn')
    const modal = document.querySelector('.modal')
    /* const closeBtn = documen.querySelector('.closeBtn') */

    searchBtn.addEventListener('click', searchChk)

    
    function searchChk() {
        
        const userName = document.getElementById('user_name').value
        const userNum = document.getElementById('user_number').value
        const userId = document.getElementById('user_id').value
        const name = '홍길동'
        const num = '01012341234'
        const id = 'london'


        if(userName == name && userNum == num && userId === id) {
            modal.classList.remove('hidden')
        } else {
            alert('존재하지 않는 회원정보입니다. 입력하신 정보를 다시 확인하시길 바랍니다.')
        }
  
    }

    document.querySelector('.closeBtn').addEventListener('click', function(){
        modal.classList.add('hidden')
    })
    document.querySelector('.bg').addEventListener('click', function(){
        modal.classList.add('hidden')
    })
    document.querySelector('.login_btn').addEventListener('click', function(){
        location.href="../Login/login_page.html"
    })





})