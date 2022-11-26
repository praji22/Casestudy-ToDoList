
function validate(callback){
  let username = document.getElementById("username");
  let password = document.getElementById("password");
    if(username.value=="admin" && password.value==12345){
      alert("Valid Name and password");
      true;
      callback();
     }
    else{
      alert("Use valid Username and Password to login");
      return false;
    }

}
function redirect(){
  window.location.href="todo.html";
}
validate(redirect);