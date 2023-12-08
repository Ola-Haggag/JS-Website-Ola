let fname =document.querySelector("#first-name")
let lname =document.querySelector("#last-name")
let email = document.querySelector("#email")
let password =document.querySelector("#password")

let registerBtn = document.querySelector("#sign_up")

/////////////

registerBtn.addEventListener("click" , function(e){
   e.preventDefault()
   if(fname.value === "" || lname === "" || email.value === ""  || password.value ===""){
    alert("please fill data!")
   }else{
    localStorage.setItem("fname" , fname.value);
    localStorage.setItem("lname" , lname.value);
    localStorage.setItem("email" , email.value);
    localStorage.setItem("password" , password.value);

    setTimeout(() => {
        window.location = "login.html"
    }, 1500)
   }
})

/* setTimeout(() => {
    
}, timeout); */