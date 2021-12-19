$(document).ready(function(){
    fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(data => {
        
        console.log(data)
        for(let i=0; i < data.length; i++){

 
        $("#employees").append(
            `
            <div class = "col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-4">
            <div class="card" style="width: 14rem;">
            <img src="https://cdn0.iconfinder.com/data/icons/dog-avatars/192/avatar-dog-doggy-saint-bernard-puppy-512.png" class="card-img-top"  width="100%" alt="...">
            <div class="card-body">
                <h5 class="card-title">Employee ID: ${data[i].id}</h5>
                <p class="card-text">${data[i].employeeName}</p>
                <a href="#" class="btn btn-danger" onclick="deleteEmployee(${data[i].id})">Delete Employee</a>
            </div>
            </div>
            </div>
            `
        )
    }
    
    });



})

function deleteEmployee(id){
    fetch((`http://localhost:8080/user/${id}`),{
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    }).then(response => response)
    .then(data => {
        console.log(data)
        window.location.reload();
    })

}