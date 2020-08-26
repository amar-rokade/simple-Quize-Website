function User_save(){
    localStorage.removeItem("user")
    localStorage.setItem("user", document.getElementById("user_name").value);
}
document.getElementById("user_name").onchange = function(){
    User_save()
  }