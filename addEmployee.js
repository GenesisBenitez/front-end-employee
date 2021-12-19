const timeNow = new Date(Date.now());

$(document).ready(function(){
$("#addEmployees").submit(function(event){
event.preventDefault();
var employeeName = document.getElementById("employeeName").value;
var age = document.getElementById("age").value;
let data = {
"employeeName": employeeName,
"age": age
}
console.log(data);
fetch(("http://localhost:8080/post"),{
method: 'POST', // *GET, POST, PUT, DELETE, etc.
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // body data type must match "Content-Type" header
}

).then(response=> response)
.then(data=> {
console.log(data);
$("#container").append(`
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
<div class="toast" style="position: absolute; top: 0; right: 0;">
<div class="toast-header">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Echo_curation_alt_check_mark.svg/1024px-Echo_curation_alt_check_mark.svg.png" width="20" height="20" class="rounded me-2" alt="...">
<strong class="mr-auto">Success</strong>

</div>
<div class="toast-body">
Employee successfully added at ${timeNow.toLocaleTimeString()}
</div>
</div>
</div>
`)
$('.toast').toast('show');

})
})

})