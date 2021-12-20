const timeNow = new Date(Date.now());


$(document).ready(function(){
     $("#addEmployees").submit(function(event){
        event.preventDefault();
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var age = document.getElementById("age").value;
        let data = {
            "firstName": firstName,
            "lastName": lastName,
            "jobTitle": jobTitle,
            "age": age
        }
        console.log(data);
        fetch(("http://localhost:8080/post"),{
            method: 'POST', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
          }
        
        ).then(response=> response)
        .then(data=> {
            console.log(data);
            $("#container").append(`
            <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div class="toast" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Echo_curation_alt_check_mark.svg/1024px-Echo_curation_alt_check_mark.svg.png" width="20" height="20" class="rounded me-2" alt="...">
                <strong class="mr-auto text-success">Success</strong>
                </div>
                <div class="toast-body">
                Employee successfully added at ${timeNow.toLocaleTimeString()}                
                </div>
            </div>
            </div>
            `)
            $('.toast').toast('show');
            // window.location = "http://127.0.0.1:5500/index.html";


        }).catch(error=>{
          $("body").append(`
          <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
          <div class="toast" style="position: absolute; top: 0; right: 0;">
              <div class="toast-header">
              <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" width="20" height="20" class="rounded me-2" alt="...">
              <strong class="mr-auto text-danger">Error</strong>
              </div>
              <div class="toast-body">
               ${error} at ${timeNow.toLocaleTimeString()}                
              </div>
          </div>
          </div>
          `)
          $('.toast').toast('show');
        })
     })
     
     })