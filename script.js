const timeNow = new Date(Date.now());



$(document).ready(function(){
    fetch("http://localhost:8080")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(let i = 0; i < data.length; i++){
        $("#employees").append(
        `
        <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4">
            <div class="card text-center" style="width: 14rem;">
                <img src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" class="card-img-top" width="100%" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data[i].firstName + " " + data[i].lastName}</h5>
                    <p class="card-text">${data[i].jobTitle}</p>
                    <a href="#" class="btn btn-danger" onclick="deleteEmployee(${data[i].id})"><i class='fa fa-trash'></i> Delete</a>
                </div>
            </div>
        </div>
        `)
                    
        }
    });
})

function deleteEmployee(id){
    console.log(`http://localhost:8080/deleteuser/${id}`)
    fetch((`http://localhost:8080/deleteuser/${id}`),{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        }).then(response=> response)
        .then(data => {
            console.log(data)
            window.location.reload();
            $("#container").append(`
            <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div class="toast" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Echo_curation_alt_check_mark.svg/1024px-Echo_curation_alt_check_mark.svg.png" width="20" height="20" class="rounded me-2" alt="...">
                <strong class="mr-auto">Success</strong>
                </div>
                <div class="toast-body">
                Employee successfully deleted at ${timeNow.toLocaleTimeString()}                
                </div>
            </div>
            </div>
            `)
            $('.toast').toast('show');
        });
        
}