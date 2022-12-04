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
                        <td> <input type="checkbox" class="mycheck" onchange="checkvalidate()" value=${i} ${response[i].completed?"checked disabled":"unchecked"}></td>
                      </tr>
                      </table>`;        
                      
      }
      document.getElementById("showlist").innerHTML = printlist;
    }
  }
  request.open("GET","https://jsonplaceholder.typicode.com/todos")
  request.send()
}


//Checkbox 
function checkvalidate()
{
    let check = document.getElementsByClassName("mycheck");
    let promise = new Promise(function(resolve, reject){
        let counter=0;
        for(let i=0; i<check.length; i++)
        {   
          if(check[i].defaultChecked==false){
            if(check[i].checked==true)
            {
             counter +=1;
            }
           }   
        }
        if(counter==5)
        {
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }       
    })
    promise.then(function(s){
      alert(s)
    })
}
