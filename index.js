function validate(callback){
  let username = document.getElementById("username");
  let password = document.getElementById("password");
    if(username.value == "admin" && password.value == "12345"){
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

function displaylist(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
      let response = JSON.parse(this.responseText);
      let printlist = '';
      console.log(response.length)
      for(var i=0; i<response.length; i++){
          printlist += `<table>
                      <tr>
                        <td> ${response[i].id} </td>
                        <td> ${response[i].title} </td>
                        <td> <input type="checkbox" id="myCheck" value=${i} ${response[i].completed?"checked disabled":"unchecked"}></td>
                      </tr>
                      </table>`;        
                      
      }
      document.getElementById("showlist").innerHTML = printlist;
    }
  }
  request.open("GET","https://jsonplaceholder.typicode.com/todos")
  request.send()
}

