document.addEventListener('DOMContentLoaded', () => {

   
    const loginBtn = document.getElementById('login')
    

    loginBtn.addEventListener('click', function(){

        const userName = document.getElementById('username').value
        const userPw = document.getElementById('userpw').value
        const id = 'london'
        const pw = '1234'
        
        if(userName === id && userPw === pw) {
            location.href="../index.html"
        } else {
            alert('로그인에 실패하셨습니다. 아이디와 비밀번호를 확인해주세요.')
            location.reload();
        }
      
    })

    
    


})



