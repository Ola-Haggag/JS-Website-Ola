let email = document.querySelector("#email")
let password =document.querySelector("#password")
let loginBtn = document.querySelector("#sign-in")


let getemail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")


loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(email.value === "" || password.value === ""){   // === مطابقه
        alert("please fill data!")
    }else{
        if(getemail && getemail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value){
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
        }else{
            alert("username or password is wrong reenter them")
        }
    }
})
