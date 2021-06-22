
let authen = document.querySelector("#email")
let password = document.querySelector("#password")
let passwordConfirm = document.querySelector("#password-confirm")
let submit = document.querySelector("#submit")

let emailErr = document.querySelector("#emailErr")
let passwordErr = document.querySelector("#passwordErr")
let passwordReconfirmErr = document.querySelector("#passwordReconfirmErr")

submit.addEventListener('click', (e) => {
    e.preventDefault()

    grabValue()
})

function grabValue() {
    let emailValue = authen.value.trim()
    let passValue = password.value.trim()
    let passConfirmValue =passwordConfirm.value.trim()
    
    if(emailValue == ""){
        emailErr.innerHTML = "Email cannot be blank!"
        emailErr.classList.add("email")
    }else if(!notValidEmail(emailValue)){
        emailErr.innerHTML = "Not a valid email!"
        emailErr.classList.add("email")
    }



    if(passValue == ""){
        passwordErr.innerHTML = "Password cannot be blank!"
        passwordErr.classList.add("password")
        
    }

    if(passConfirmValue == ""){
        passwordReconfirmErr.innerHTML = "Password2 cannot be blank!"
        passwordReconfirmErr.classList.add("passwordconfirm")
        
    } else if(passValue !== passConfirmValue){
        passwordReconfirmErr.innerHTML = "Passwords does not match"
        passwordReconfirmErr.classList.add("passwordconfirm")
    }
}

// Check if email is accurate
function notValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}