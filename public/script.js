const BASE_URL = `https://tarkov-companion-api.vercel.app/` // `http://localhost:3001/`
let isLoggedIn = false
let user = null
const loginDiv = document.querySelector(`#loginCheck`)
const loginButton = `
<a href="/auth/google" class="login">LOG IN&nbsp;<img src="https://i.imgur.com/FHjYyi0.png"></a>
`
const logoffButton = `
<a href="/logout" class="login" id="logoutBtn">LOG OFF</a>
`
async function showLogin() {
    if (isLoggedIn === false) {
        loginDiv.innerHTML = loginButton
    } else if (isLoggedIn === true) {
        loginDiv.innerHTML = logoffButton
    }
}
async function checkLogin(){
fetch('/check-login')
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('User is not logged in')
    }
  })
  .then(userData => {
    console.log('User:', userData)
    isLoggedIn = true
    user = userData
    showLogin()
    localStorage.setItem(`userId`, user._id)
  })
  .catch(error => {
    console.error('Error:', error)
    isLoggedIn = false
    user = null
    showLogin()
    localStorage.removeItem('userId')
  })
}

if (localStorage.getItem(`userId`) === null) {
  checkLogin()
  loginDiv.innerHTML = loginButton
} else if(localStorage.getItem(`userId`)) {
  loginDiv.innerHTML = logoffButton
  let logoutBtn = document.querySelector(`#logoutBtn`)
  logoutBtn.addEventListener(`click`, function() {
    localStorage.removeItem('userId')
  })
}