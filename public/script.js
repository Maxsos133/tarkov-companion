const BASE_URL =  `https://tarkov-help.vercel.app/`//   `http://localhost:3001/`  `https://tarkov-help.vercel.app/`
let isLoggedIn = false
let user = null
const loginDiv = document.querySelector(`#loginCheck`)
const loginButton = `
<a href="/auth/google" class="login">LOG IN&nbsp;<img src="https://i.imgur.com/FHjYyi0.png"></a>
`
const logoffButton = `
<a href="/logout" class="login" id="logoutBtn">LOG OFF</a>
`
async function checkLogin() {
  await fetch('/check-login')
    .then(response => {
      if (response.ok) {
        return response.json(); 
      } else {
        throw new Error('User is not logged in');
      }
    })
    .then(userData => {
      console.log('User:', userData);
      isLoggedIn = true;
      user = userData;
      
      localStorage.setItem('userId', user._id);
      loginDiv.innerHTML = logoffButton
    })
    .catch(error => {
      console.error('Error:', error);
      isLoggedIn = false;
      user = null;
      
      
    });
}


async function checkUserIdIf () {
  if (localStorage.getItem(`userId`) === null) {
   
      await checkLogin();
     
        loginDiv.innerHTML = loginButton;
        if(localStorage.getItem(`userId`)) {
          loginDiv.innerHTML = logoffButton
           let logoutBtn = document.querySelector(`#logoutBtn`)
            logoutBtn.addEventListener(`click`, function() {
           localStorage.removeItem('userId')
       })
        }

  } else if(localStorage.getItem(`userId`)) {
    loginDiv.innerHTML = logoffButton
    let logoutBtn = document.querySelector(`#logoutBtn`)
    logoutBtn.addEventListener(`click`, function() {
      localStorage.removeItem('userId')
    })
  }
}

checkUserIdIf()