/* Main menu container */
const menuContainer = document.getElementById("menu")

const failMsg = document.createElement("p")
const failMsgText = document.createTextNode("Write the correct username and password!")
failMsg.appendChild(failMsgText)

/* Login button */
const btnLogin = document.getElementById("btn")

btnLogin.addEventListener("click", function() {
    const loginBox = document.getElementById("login").value
    const pswBox = document.getElementById("psw").value

    localStorage.setItem("Användernamn", loginBox)
    localStorage.setItem("Lösenord", pswBox)

    location.reload()
})

/* Welcome menu container */
const welcomeMenu = document.getElementById("welcome-menu")

const userLogin = localStorage.getItem("Användernamn")
const userPsw = localStorage.getItem("Lösenord")

const btnLogout = document.createElement("button")
const btnLogoutText = document.createTextNode("Logout")
btnLogout.appendChild(btnLogoutText)

/* Users */
if (userLogin === "Fredrik" && userPsw === "12345") {
    menuContainer.remove()
    welcomeMenu.innerHTML = `Welcome, ${localStorage.getItem("Användernamn")}!`
    welcomeMenu.appendChild(btnLogout)
} 
else if (userLogin === "Anna" && userPsw === "gotklp6") {
    menuContainer.remove()
    welcomeMenu.innerHTML = `Welcome, ${localStorage.getItem("Användernamn")}!`
    welcomeMenu.appendChild(btnLogout)
} 
else {
    menuContainer.appendChild(failMsg)
    welcomeMenu.remove()
}

/* Logout button */
btnLogout.addEventListener("click", function() {
    localStorage.clear()
    location.reload()
})




