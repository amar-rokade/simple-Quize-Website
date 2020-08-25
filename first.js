function User_save(){
    sessionStorage.clear()
    sessionStorage.setItem("user", document.getElementById("user_name").value);
}
document.getElementById("user_name").onchange = function(){
    User_save()
  }